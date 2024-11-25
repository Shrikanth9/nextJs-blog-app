import BlogCard from "./BlogCard";

const HomeBlogs = () => {
    return ( 
        <section className="text-center">
            <h1 className="text-3xl font-bold text-center mt-10"> Recently posted </h1>
            <div className="grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 xl:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((blog, index) => (
                    <BlogCard key={index} />
                ))}
            </div>
        </section>
     );
}
 
export default HomeBlogs;