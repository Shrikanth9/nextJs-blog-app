import BlogCard from "@/components/BlogCard";
import YourBlogCard from "@/components/YourBlogCard";
import ConnectDB from "@/config/database";
import { Blog } from "@/models/Blog";
import { User } from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { convertToPlainObj } from "@/utils/Utils";
import Image from "next/image";

const ProfilePage = async() => {
    const session = await getSessionUser();

    if(!session?.user) {
        throw new Error("You must be logged in ");  
    }

    const profileImage = session.user.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
    await ConnectDB();
    const userId = await User.findOne({ email: session?.user?.email }).lean().then((user) => convertToPlainObj(user)._id);
    const blogs: IBlog[] = await Blog.find({ owner: userId }).lean().then((blogs) => convertToPlainObj(blogs));
    return (
        <section className="container mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-center">
                <div className="mt-5">
                    <Image className="rounded-full mx-auto" src={profileImage} alt={session.user.name!} width={150} height={150} />
                    <h2 className="text-2xl font-semibold text-center mt-5">{session.user.name}</h2>
                    <p className="text-center">{session.user.email}</p>
                </div>
            </div>
            <div className="mt-10">
                <h1 className="text-3xl font-bold text-center"> Your blogs </h1>
                <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 xl:grid-cols-3">
                    {blogs.map((blog: IBlog, index) => (
                        <YourBlogCard key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    )
}
 
export default ProfilePage;