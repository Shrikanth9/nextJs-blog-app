import editBlog from "@/app/actions/editBlog";
import EditBlogButton from "./EditBlogButton";
import ConnectDB from "@/config/database";
import { Blog } from "@/models/Blog";
import { convertToPlainObj } from "@/utils/Utils";

const EditBlogForm = async({ blogId }: { blogId: string }) => {
    await ConnectDB();
    const blog = await Blog.findOne({ _id: blogId }).lean().then((blog) => convertToPlainObj(blog));
    const editBlogById = editBlog.bind(null, blogId);
    return ( 
        <form action={editBlogById}>
            <h1 className="text-3xl font-bold text-center"> Edit blog </h1>
            <label className="form-control mt-5">
                <div className="label">
                    <span className="label-text font-semibold">Title</span>
                </div>
                <input type="text" placeholder="Title" name="title" className="input input-bordered" defaultValue={blog.title} required />
            </label>
            <label className="form-control mt-5">
                <div className="label">
                    <span className="label-text font-semibold">Content</span>
                </div>
                <textarea className="textarea textarea-bordered textarea-lg min-h-[500px]" placeholder="Add your story " name="content" defaultValue={blog.content} required></textarea>
            </label>
            {/* <label className="form-control mt-5">       
                <div className="label">
                    <span className="label-text font-semibold">Add an image (optional)</span>
                </div>
                <input type="file" className="file-input file-input-bordered" accept="image/*" name="image"/>
            </label> */}
            <div className="mt-10">
                <EditBlogButton />
            </div>
        </form>
     );
}
 
export default EditBlogForm;