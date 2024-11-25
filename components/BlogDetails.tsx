import Image from "next/image";
import BlogThread from "./BlogThread";

const BlogDetails = ({ blog }: { blog: IBlog}) => {
    const {_id: id, image, title, content} = blog;
    return ( 
        <article className="prose lg:prose-xl mx-3">
            <h1 className="text-5xl font-bold text-center my-5"> {title} </h1>
            <Image className="mx-auto rounded-md shadow-md" src={image} alt={title} width={800} height={450}/>
            <BlogThread />
            <p className="text-center mt-10 mx-2 whitespace-pre-line"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus amet assumenda, et quibusdam commodi obcaecati rerum praesentium odit nostrum eveniet. Qui officiis dignissimos reprehenderit aut temporibus at sapiente exercitationem optio repudiandae nulla dolore ipsa illo saepe neque voluptas dolores, excepturi minima rem nisi ipsam ut ab blanditiis facilis! Illum ex rem esse fugiat aperiam, placeat iste tenetur delectus consequuntur, sit inventore dolorum facere itaque eius perspiciatis, nobis ducimus provident voluptas deleniti quae est mollitia laudantium unde! Distinctio veritatis doloribus placeat corporis laborum incidunt earum optio natus architecto repellat quae delectus tenetur aliquam sint velit, minus expedita maiores odit. Dignissimos, nam. </p>
        </article>
     );
}
 
export default BlogDetails;