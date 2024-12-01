import { User } from "@/models/User"
import Google from "next-auth/providers/google"

export const authOptions = {
    providers: [Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),],
    callbacks: {
      authorized: async ({ auth }: any) => {
         // Logged in users are authenticated, otherwise redirect to login page
         return !!auth
       },
      signIn: async ({ profile, account }: any) => {
         const provider = account?.provider
         const { email, picture:image, name:username } = profile;
         const userExists = await User.findOne({ email }).lean(); 
         if(!userExists) {
            await User.create({
               provider,
               username,
               email,
               image
            })
         }
         return true
      },
    },
}