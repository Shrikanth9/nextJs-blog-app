import Image from "next/image";
import Link from "next/link";
import { FormateDate } from "@/utils/Utils";

const YourBlogCard = ({ blog }: { blog: IBlog }) => {
  const { _id: id, image, title, content, createdAt } = blog;
  const date = new Date(createdAt);
  const dateString = FormateDate(date);

  return (
    <div className="card-container shadow-lg bg-base-100 w-80 lg:w-96 lg:max-w-sm mt-10">
      <figure className="relative aspect-video">
        <Image
          src={image}
          alt={title}
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
        <p className="overflow-hidden text-ellipsis h-12">{content}</p>
        <div className="card-actions justify-between flex items-center gap-3 mt-5">
          <span className="text-sm text-gray-500">{`${dateString}`}</span>
          <div className="text-sm text-gray-500 flex gap-2">
            <Link href={`/blogs/${id}`} className="underline">
              Read
            </Link>
            <span>|</span>
            <Link href={`/blogs/edit/${id}`} className="underline">
              Edit
            </Link>
            <span>|</span>
            <Link href={`/blogs/delete/${id}`} className="underline">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourBlogCard;

