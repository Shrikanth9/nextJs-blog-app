import Google from "next-auth/providers/google"

export const authOptions = {
    providers: [Google],
    callbacks: {
        authorized: async ({ auth }: any) => {
          // Logged in users are authenticated, otherwise redirect to login page
          return !!auth
        },
      }
}