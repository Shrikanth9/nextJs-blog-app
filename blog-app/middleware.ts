export { auth as middleware } from "@/config/auth"

export const config = {
    matcher: ["/blogs/:path*", "/profile"],
    // unstable_allowDynamic: [
    //     '/node_modules/mongoose/dist/*',
    //   ]
};