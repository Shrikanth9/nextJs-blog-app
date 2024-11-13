import connectDB from "@/config/database"
import User from "@/models/User";
import GoogleProvider from "next-auth/providers/google" 
import GithubProvider from "next-auth/providers/github"
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
        }),

        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
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
        async signIn({ account, profile }: any) {
            await connectDB();
            const userExists = await User.findOne({ email: profile.email });

            if(!userExists) {
                const username = account.provider === "github" ? profile.login : profile.name;
                const image = account.provider === "github" ? profile.avatar_url : profile.image;
                await User.create({
                    provider: account.provider,
                    email: profile.email,
                    username,
                    image,
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