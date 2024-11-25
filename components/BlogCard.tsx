import Image from "next/image";
import Link from "next/link";

const BlogCard = ( { blog }: { blog: IBlog}) => {
    const {_id: id, image, title, content} = blog;
    return ( 
        <div className="card bg-base-100 w-80 shadow-xl mt-10 md:w-96">
            <figure>
                <Image
                    src={image}
                    alt="Shoes"
                    width={300}
                    height={300} 
                    priority
                    className="w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href={`/blogs/${id}`}>View</Link>
                </div>
            </div>
        </div>
     );
}
 
export default BlogCard;