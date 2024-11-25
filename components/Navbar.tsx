import Link from "next/link";
import { FaBlog } from "react-icons/fa";

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

                <div className="text-white">
                    Profile
                </div>

            </div>
        </nav>
     );
}
 
export default Navbar;