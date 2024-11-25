import { Blog } from "@/models/Blog";
import ConnectDB from "@/config/database";
import BlogDetails from "@/components/BlogDetails";
import { convertToPlainObj } from "@/utils/Utils";

const BlogPage = async({ params }: any) => {
    await ConnectDB();
    const { id } = await params;
    const blog: IBlog = await Blog.findById(id).lean().then((blog) => convertToPlainObj(blog));
    return ( 
        <BlogDetails blog={blog} />
     );
}
 
export default BlogPage;