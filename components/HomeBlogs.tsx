import { Blog } from "@/models/Blog";
import BlogCard from "./BlogCard";
import ConnectDB from "@/config/database";

const HomeBlogs = async() => {
    await ConnectDB();
    const blogs = await Blog.find({});  
    console.log(blogs);
      
    return ( 
        <section className="text-center">
            <h1 className="text-3xl font-bold text-center mt-10"> Recently posted </h1>
            <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 xl:grid-cols-3">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>
        </section>
     );
}
 
export default HomeBlogs;