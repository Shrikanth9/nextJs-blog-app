'use client'

import Link from "next/link";
import { FaBlog } from "react-icons/fa";
import SignIn from "./signIn";
import SignOutButton from "./signOut";
import { useSession } from "next-auth/react";

const Navbar = () => {
    const { data: session } = useSession();
    return ( 
        <nav>
            <div className="navbar bg-gray-800 relative">
               <div>
                    <Link href="/" className="text-2xl text-white font-bold ml-2 flex gap-2">
                        <FaBlog className="mt-1 mr-5 md:mr-1"/>
                        <h2 className="hidden md:inline ml-2"> Blog App </h2>
                    </Link>
               </div>

               {/* Mobile menu */}
               <div className="text-white gap-3 md:hidden">
                    <Link href="/"  className="p-3 rounded-md hover:bg-green-600"> Home </Link>
                    <Link href="/blogs" className="p-3 rounded-md hover:bg-green-600"> Blogs </Link>
                    <Link href="/blogs/add" className="p-3 rounded-md hover:bg-green-600"> Add blog </Link>
                </div>

                {/* Desktop menu */}
               <div className="hidden text-white mx-auto gap-20 md:flex">
                    <Link href="/"  className="p-3 rounded-md hover:bg-green-600"> Home </Link>
                    <Link href="/blogs" className="p-3 rounded-md hover:bg-green-600"> Blogs </Link>
                    <Link href="/blogs/add" className="p-3 rounded-md hover:bg-green-600"> Add blog </Link>
                </div>

                <div className="absolute inset-y-0 right-0">
                    {/* <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div> */}
                    <div className="flex gap-5 mr-5">
                        {!session ? (
                            <>
                                <SignIn provider="google"/>
                                <SignIn provider="github"/>
                            </>
                            ) : <SignOutButton />}
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;