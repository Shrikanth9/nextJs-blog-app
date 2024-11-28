export { auth as middleware } from "@/config/auth"

export const config = {
    matcher: ["/blogs/:path*", "/profile"],
};