import AddBlogForm from "@/components/AddBlogForm";

const AddBlogPage = () => {
    return ( 
        <section className="mt-5">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-white px-6 py-8 m-4 shadow-md rounded-md border md:m-0">
                    <AddBlogForm />
                </div>
            </div>
        </section>
     );
}
 
export default AddBlogPage;