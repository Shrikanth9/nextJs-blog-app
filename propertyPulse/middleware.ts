export { default } from 'next-auth/middleware';

export const config = {
    matcher: [
        '/properties/:path*',
        '/profile'
    ]
}