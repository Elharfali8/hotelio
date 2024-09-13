'use client';

import { navLinks } from "@/utils/data";
import Link from "next/link";
import { useRouter } from "next/navigation";  // Correct import for App Router
import { FaHotel, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = ({isOpen, handleNav}) => {
  const { pathname } = useRouter();  // Extract pathname for active link styling

  return (
    <nav className='navbar h-20 grid place-items-center'>
      <div className="container main-container  flex items-center justify-between">
        <Link 
          href='/' 
          className="flex items-center gap-x-2 text-xl lg:text-2xl xl:text-3xl poppins-semibold tracking-wider transition-all ease-in-out duration-150"
        >
          <span><FaHotel /></span> Hotelio 
        </Link>
        <ul className="hidden lg:flex items-center gap-x-2">
          {navLinks.map((link) => {
            const { id, title, path } = link;
            return (
              <li key={id}>
                <Link 
                  href={path} 
                  className={`${pathname === path ? 'active' : ''} capitalize text-lg xl:text-xl tracking-wide poppins-medium px-3 py-1`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
              </ul>
              <div className="grid lg:hidden place-items-center">
                  {isOpen ? <button type="button" className="bg-transparent hover:bg-transparent" onClick={handleNav}><FaTimes size={27} /></button> : <button type="button" className="bg-transparent hover:bg-transparent" onClick={handleNav}><FaBars size={27} /></button>}
              </div>
      </div>
    </nav>
  );
};

export default Navbar;
