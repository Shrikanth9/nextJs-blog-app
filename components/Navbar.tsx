import Link from "next/link";
import { FaBlog, FaGoogle } from "react-icons/fa";

const Navbar = () => {
    return ( 
        <nav>
            <div className="navbar bg-gray-800">
               <div>
                    <Link href="/" className="text-2xl text-white font-bold ml-2 flex gap-2">
                        <FaBlog className="mt-1"/>
                        <h2 className="hidden md:inline ml-2"> Blog App </h2>
                    </Link>
               </div>

               {/* Mobile menu */}
               <div className="text-white md:hidden">
                    <Link href="/"  className="p-3 rounded-md hover:bg-green-600"> Home </Link>
                    <Link href="/blogs" className="p-3 rounded-md hover:bg-green-600"> Blogs </Link>
                    <Link href="/add-blog" className="p-3 rounded-md hover:bg-green-600"> Add blog </Link>
                </div>

                {/* Desktop menu */}
               <div className="hidden text-white mx-auto gap-20 md:flex">
                    <Link href="/"  className="p-3 rounded-md hover:bg-green-600"> Home </Link>
                    <Link href="/blogs" className="p-3 rounded-md hover:bg-green-600"> Blogs </Link>
                    <Link href="/add-blog" className="p-3 rounded-md hover:bg-green-600"> Add blog </Link>
                </div>

                <div className="flex-none gap-2">
                    {/* <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div> */}
                    <div className="flex gap-5 mr-5">
                        <button className="text-white p-3 rounded-md hover:bg-green-600"> <FaGoogle /></button>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;