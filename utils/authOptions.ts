import { User } from "@/models/User"
import Google from "next-auth/providers/google"

export const authOptions = {
    providers: [Google],
    callbacks: {
      signIn: async ({ profile, account }: any) => {
         const provider = account?.provider
         const { email, picture:image, name:username } = profile;
         const userExists = await User.findOne({ email }); 
         if(!userExists) {
            await User.create({
               provider: provider,
               username,
               email,
               image
            })
         }
         return true
      },
    },
}