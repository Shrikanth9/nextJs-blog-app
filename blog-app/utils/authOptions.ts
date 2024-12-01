import { User } from "@/models/User"
import Google from "next-auth/providers/google"
import ConnectDB from "@/config/database"

export const authOptions = {
    providers: [Google],
    callbacks: {
      authorized: async ({ auth }: any) => {
         // Logged in users are authenticated, otherwise redirect to login page
         return !!auth
       },
      signIn: async ({ profile, account }: any) => {
         const provider = account?.provider
         const { email, picture:image, name:username } = profile;
         await ConnectDB();
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