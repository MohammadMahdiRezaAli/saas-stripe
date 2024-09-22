import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

// Internationalization (i18n) Middleware
const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "en",
  alternateLinks: true,
});

export default authMiddleware({
  publicRoutes: [
    "/", // Public root page
    "/test", // Public test route
    "/api/clerk", // Public API routes
    "/api/stripe",
    "/api/test",
    "/api/cron",
    "/:locale", // Locale-based routes
    "/:locale/api/clerk",
    "/:locale/api/stripe",
    "/:locale/sign-in", // Sign-in pages
  ],

  // Apply i18n (locale) middleware before auth middleware
  beforeAuth(request) {
    return intlMiddleware(request); // Ensure locale handling
  },

  // After authentication, handle user session and routing
  afterAuth(auth, req) {
    const url = req.nextUrl;
    const hostname = req.headers
      .get("host")!
      .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

    const { userId } = auth;

    // User isn't signed in and the route is private -- redirect to sign-in
    if (!userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Authenticated users can access protected routes
    if (userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    // Public routes can be accessed by anyone
    if (auth.isPublicRoute) {
      return NextResponse.next();
    }

    // Handle hostname-based routing (for multi-tenant setups)
    const searchParams = req.nextUrl.searchParams.toString();
    const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

    // If accessing the root domain or localhost, proceed
    if (hostname === "localhost:3000" || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
      return NextResponse.next();
    }

    // Rewrite other hostnames to dynamic routes based on domain
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  },
});

// Middleware config for matching routes
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
