import {clerkMiddleware, createRouteMatcher} from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
    "/",
]);

export default clerkMiddleware((auth, request) => {
    if (isProtectedRoute(request)) {

    }
});

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};