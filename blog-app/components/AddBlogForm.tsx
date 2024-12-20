import addBlog from "../app/actions/addBlog"
import AddBlogButton from "./AddBlogButton";

const AddBlogForm = () => {
    return ( 
        <form action={addBlog}>
            <h1 className="text-3xl font-bold text-center"> Add your own blog </h1>
            <label className="form-control mt-5">
                <div className="label">
                    <span className="label-text font-semibold">Title</span>
                </div>
                <input type="text" placeholder="Title" name="title" className="input input-bordered" required />
            </label>
            <label className="form-control mt-5">
                <div className="label">
                    <span className="label-text font-semibold">Content</span>
                </div>
                <textarea className="textarea textarea-bordered textarea-lg min-h-[500px]" placeholder="Add your story " name="content" required></textarea>
            </label>
            <label className="form-control mt-5">
                <div className="label">
                    <span className="label-text font-semibold">Add an image</span>
                </div>
                <input type="file" className="file-input file-input-bordered" accept="image/*" name="image" required />
            </label>
            <div className="mt-10">
                <AddBlogButton />
            </div>
        </form>
     );
}
 
export default AddBlogForm;