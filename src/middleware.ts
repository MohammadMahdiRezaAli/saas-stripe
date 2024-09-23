import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";

const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "en",
  alternateLinks: true,
});

export default authMiddleware({
  publicRoutes: [
    "/",
    "/test",
    "/api/clerk",
    "/api/stripe",
    "/api/test",
    "/api/cron",
    "/:locale",
    "/:locale/api/clerk",
    "/:locale/api/stripe",
    "/:locale/sign-in",
  ],
  beforeAuth(request) {
    return intlMiddleware(request);
  },
  afterAuth(auth, req) {
    const url = req.nextUrl;
    let hostname = req.headers
      .get("host")!
      .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
    const { userId } = auth;  // Removed sessionClaims and orgId as they are not used.

    // For user visiting /onboarding, don't try and redirect
    if (userId && req.nextUrl.pathname.includes("onboarding") && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    // User isn't signed in and the route is private -- redirect to sign-in
    if (!userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Uncomment and refine the onboarding logic if needed:
    // Catch users who don't have `onboardingComplete: true` in PublicMetadata
    if (userId && !auth.isPublicRoute && !auth?.sessionClaims?.metadata?.onboardingComplete) {
      const onboardingUrl = new URL("/onboarding", req.url);
      return NextResponse.redirect(onboardingUrl);
    }

    // User is logged in and the route is protected - let them view.
    if (userId && !auth.isPublicRoute) return NextResponse.next();

    // If the route is public, anyone can view it.
    if (auth.isPublicRoute) return NextResponse.next();

    const searchParams = req.nextUrl.searchParams.toString();
    const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;

    // Rewrite root application to `/home` folder
    if (
      hostname === "localhost:3000" ||
      hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
    ) {
      return NextResponse.next();
    }

    // Rewrite everything else to `/[domain]/[slug]` dynamic route
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
