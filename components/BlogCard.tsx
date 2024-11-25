import Image from "next/image";

const BlogCard = ( { blog }: { blog: {image: string, title: string, content: string}}) => {
    const {image, title, content} = blog;
    return ( 
        <div className="card bg-base-100 w-80 shadow-xl mt-10 md:w-96">
            <figure>
                <Image
                    src={image}
                    alt="Shoes"
                    width={400}
                    height={300} 
                    priority
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
     );
}
 
export default BlogCard;