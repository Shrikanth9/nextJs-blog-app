import { Blog } from "@/models/Blog";
import ConnectDB from "@/config/database";
import BlogCard from "@/components/BlogCard";
import { convertToPlainObj } from "@/utils/Utils";
const BlogsPage = async() => {
    await ConnectDB();
    let blogs: IBlog[] = await Blog.find({}).sort({ createdAt: -1 }).lean().then((blogs) => convertToPlainObj(blogs));
    return ( 
        <section className="text-center">
            <h1 className="text-3xl font-bold text-center mt-10"> All blogs </h1>
            <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 xl:grid-cols-3">
                {blogs.map((blog: IBlog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>
        </section>
     );
}
 
export default BlogsPage;