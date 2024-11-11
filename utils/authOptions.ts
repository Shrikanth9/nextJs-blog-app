import connectDB from "@/config/database"
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google" 
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    callbacks: {
        async signIn({ profile }: any) {
            await connectDB();
            const userExists = await User.findOne({ email: profile.email });

            if(!userExists) {
                const username = profile.name.slice(0, 20);
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture,
                })
            }
            return true
        },

        async session({ session }: any) {
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();
            return session
        }
    }
}