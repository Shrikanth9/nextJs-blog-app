import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const authOptions = {
    providers: [Google, GitHub],
    callbacks: {
        authorized: async ({ auth }: any) => {
          // Logged in users are authenticated, otherwise redirect to login page
          return !!auth
        },
      }
}