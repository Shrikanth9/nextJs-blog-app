import Image from "next/image";
import BlogThread from "./BlogThread";

const BlogDetails = ({ blog }: { blog: IBlog}) => {
    const {_id: id, image, title, content} = blog;
    return ( 
        <article className="prose lg:prose-xl mx-3">
            <h1 className="text-2xl md:text-5xl font-bold text-center my-5"> {title} </h1>
            {/* Mobile */}
            <Image className="md:hidden mx-auto rounded-md shadow-md w-full h-auto" src={image} alt={title} width={800} height={450}/>
            
            {/* Desktop */}
            <Image className="hidden md:block mx-auto rounded-md shadow-md max-w-4xl" src={image} alt={title} width={800} height={450}/>

            <BlogThread />
            <p className="text-center mt-10 mx-2 whitespace-pre-line"> {content} </p>
        </article>
     );
}
 
export default BlogDetails;