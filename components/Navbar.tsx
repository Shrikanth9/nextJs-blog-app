'use client'

import Link from "next/link";
import { FaBlog } from "react-icons/fa";
import SignIn from "./signInButton";
import Image from "next/image";
import { getProviders, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const { data: session } = useSession();
    const [providers, setProviders] = useState(null)

    const profileImage = session?.user?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"

    const pathname = usePathname();

    useEffect(() => {
        const fetchProviders = async () => {
            const res: any = await getProviders();
            setProviders(res);
        };
        fetchProviders();
    }, []);
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
                    <Link href="/"  className={`p-3 rounded-md hover:bg-green-600 ${pathname === "/" && "bg-green-600"}`}> Home </Link>
                    <Link href="/blogs" className={`p-3 rounded-md hover:bg-green-600 ${pathname === "/blogs" && "bg-green-600"}`}> Blogs </Link>
                    <Link href="/blogs/add" className={`p-3 rounded-md hover:bg-green-600 ${pathname === "/blogs/add" && "bg-green-600"}`}> Add blog </Link>
                </div>

                {/* Desktop menu */}
               <div className="hidden text-white mx-auto gap-20 md:flex">
                    <Link href="/"  className={`p-3 rounded-md hover:bg-green-600 ${pathname === "/" && "bg-green-600"}`}> Home </Link>
                    <Link href="/blogs" className={`p-3 rounded-md hover:bg-green-600 ${pathname === "/blogs" && "bg-green-600"}`}> Blogs </Link>
                    <Link href="/blogs/add" className={`p-3 rounded-md hover:bg-green-600 ${pathname === "/blogs/add" && "bg-green-600"}`}> Add blog </Link>
                </div>

                <div className="absolute inset-y-0 right-0">
                    <div className="flex mr-2">
                        {!session ? (
                                providers && Object.values(providers).map((provider: any) => (
                                    <SignIn key={provider.name} provider={provider.id} />
                                ))
                            ) : (
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <Image
                                                alt="Tailwind CSS Navbar component"
                                                src={profileImage}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <li>
                                            <Link href="/profile">
                                                Profile
                                            </Link>
                                        </li>
                                        <li><button onClick={() => signOut()}>Logout</button></li>
                                    </ul>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;