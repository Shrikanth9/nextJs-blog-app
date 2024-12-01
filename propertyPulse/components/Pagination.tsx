import Link from "next/link";

const Pagination = ({ page, pageSize, total}: { page: number, pageSize: number, total: number}) => {
    const totalPages = Math.ceil(total / pageSize);
    return ( 
        <section className="container mx-auto flex justify-center items-center">
           {page > 1 && <Link href={`?page=${page - 1}`} className="mr-2 px-2 py-1 border border-gray-300 rounded-md">
                Previous
            </Link>}
            <span className="mx-2"> Page {page} of {totalPages}</span>
            { page < totalPages && <Link href={`?page=${page + 1}`} className="ml-2 px-2 py-1 border border-gray-300 rounded-md">
                Next
            </Link>}
        </section>
     );
}
 
export default Pagination;