import { Blog } from "@/models/Blog";
import BlogCard from "./BlogCard";
import ConnectDB from "@/config/database";
import { convertToPlainObj } from "@/utils/Utils";

const HomeBlogs = async() => {
    await ConnectDB();
    const blogs: IBlog[] = await Blog.find({}).limit(3).lean().then((blogs) => convertToPlainObj(blogs));  
    
    return ( 
        <section>
            { blogs.length > 0 ? (
                <>
                    <h1 className="text-3xl font-bold text-center mt-10"> Recently posted </h1>
                    <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 xl:grid-cols-3">
                        {blogs.map((blog: IBlog, index) => (
                            <BlogCard key={index} blog={blog} />
                        ))}
                    </div>

                </>
            ) : (
                <h1 className="text-3xl font-bold text-center mt-10"> No blog found </h1>
            )}
        </section>
     );
}
 
export default HomeBlogs;