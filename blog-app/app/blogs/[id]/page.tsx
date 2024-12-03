import { Blog } from "@/models/Blog";
import ConnectDB from "@/config/database";
import BlogDetails from "@/components/BlogDetails";
import { convertToPlainObj } from "@/utils/Utils";
import { User } from "@/models/User";

const BlogPage = async({ params }: { params: Promise<{ id: string }>}) => {
    await ConnectDB();
    const { id } = await params;
    await User.findById(id).lean();
    const blog: IBlog = await Blog.findById(id).populate("owner").lean().then((blog) => convertToPlainObj(blog));
    return ( 
        <BlogDetails blog={blog} />
     );
}
 
export default BlogPage;