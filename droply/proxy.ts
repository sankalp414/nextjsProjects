import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define paths that shouldn't require auth/redirect logic
const publicPaths = ["/", "/sign-in", "/sign-up"];

export default clerkMiddleware(async (auth, request) => {
  const { userId } = await auth();
  const { pathname } = request.nextUrl;

  // Check if the current route matches public paths exactly or as a sub-path
  const isPublicRoute = publicPaths.some((path) => 
    pathname === path || pathname.startsWith(`${path}/`)
  );

  // If the user is signed in and trying to access a public auth page (like sign-in),
  // redirect them to the dashboard.
  if (userId && isPublicRoute && pathname !== "/") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Always run for Clerk-specific frontend API routes
    "/__clerk/(.*)",
  ],
};
