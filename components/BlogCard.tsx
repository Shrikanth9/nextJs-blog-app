const BlogCard = () => {
    return ( 
        <div className="card bg-base-100 w-80 shadow-xl mt-10 md:w-96">
            <figure>
                <img
                    src="/images/Bird.png"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View</button>
                </div>
            </div>
        </div>
     );
}
 
export default BlogCard;