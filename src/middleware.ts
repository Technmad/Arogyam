import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
const isPublicRoute = createRouteMatcher(["/", "(auth)(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  if (isPublicRoute(req)) {
    // Allow public routes
    return NextResponse.next();
  }

  if (isProtectedRoute(req) && !userId) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
// This matcher excludes static files and API routes from middleware processing
// and only applies to the specified routes.
