import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n";
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Existing middleware for internationalization
const intlMiddleware = createMiddleware({
  locales: locales,
  defaultLocale: "en",
  alternateLinks: true,
});

// New public route matcher for Clerk middleware
const isPublicRoute = createRouteMatcher(['/', '/onboarding']);

export default authMiddleware({
  publicRoutes: [
    "/", 
    "/test", 
    "/api/clerk", 
    "/api/stripe", 
    "/api/stripe", 
    "/api/test", 
    "/api/cron", 
    "/:locale", 
    "/:locale/api/clerk", 
    "/:locale/api/stripe", 
    "/:locale/sign-in"
  ],
  beforeAuth(request) {
    return intlMiddleware(request);
  },
  afterAuth(auth, req) {
    const url = req.nextUrl;
    let hostname = req.headers
      .get("host")!
      .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
    const { userId, sessionClaims, orgId } = auth;
    
    // For user visiting /onboarding, don't try and redirect
    if (userId && req.nextUrl.pathname.includes("onboarding") && !auth.isPublicRoute) {
      return NextResponse.next();
    }

    // User isn't signed in and the route is private -- redirect to sign-in
    if (!userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    
    // Catch users who don't have `onboardingComplete: true` in publicMetadata
    if (userId && !orgId && !sessionClaims?.metadata?.onboardingComplete && !auth.isPublicRoute) {
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
    if (hostname === "localhost:3000" || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
      return NextResponse.next();
    }

    // Rewrite everything else to `/[domain]/[slug] dynamic route
    return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
  },
});

// New Clerk middleware logic for route handling and configuration
export const clerkMiddlewareConfig = clerkMiddleware((auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = auth();

  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  if (userId && !sessionClaims?.metadata?.onboardingComplete && req.nextUrl.pathname !== '/onboarding') {
    const onboardingUrl = new URL('/onboarding', req.url);
    return NextResponse.redirect(onboardingUrl);
  }

  if (userId && !isPublicRoute(req)) {
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", 
    "/", 
    "/(api|trpc)(.*)"
  ],
};
