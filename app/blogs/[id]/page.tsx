import { Blog } from "@/models/Blog";
import ConnectDB from "@/config/database";
import BlogDetails from "@/components/BlogDetails";

const BlogPage = async({ params }: any) => {
    await ConnectDB();
    const { id } = await params;
    const blog = await Blog.findById(id);
    return ( 
        <BlogDetails blog={blog} />
     );
}
 
export default BlogPage;