import Image from "next/image";
import Link from "next/link";
import { FormateDate } from "@/utils/Utils";

const BlogCard = ( { blog }: { blog: IBlog}) => {
    const {_id: id, image, title, content, createdAt} = blog;
    const date = new Date(createdAt);
    const dateString = FormateDate(date);

    return ( 
        <Link href={`/blogs/${id}`}>
            <div className="card shadow-lg bg-base-100 w-80 lg:w-96 lg:max-w-sm mt-10 transform transition-transform hover:scale-105">
                <figure className="relative aspect-video">
                    <Image
                        src={image}
                        alt="Shoes"
                        fill={true}
                        sizes="100%"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="card-title text-white text-2xl text-center">{title}</h2>
                    </div>
                </figure>
                <div className="card-body p-4">
                    <p className="line-clamp-3">{content}</p>
                    <div className="card-actions justify-between flex items-center gap-3 mt-5">
                        <span className="text-sm text-gray-500">{`${dateString}`}</span>
                        <span className="text-sm text-gray-500">
                            Click to read more
                        </span>
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default BlogCard;
