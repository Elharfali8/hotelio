import { navLinks } from '@/utils/data';
import Link from 'next/link';
import React from 'react'

const Sidebar = ({isOpen, handleNav}) => {
  return (
      <aside className={`
        lg:hidden fixed top-20 border-t border-t-[#00D9F5] bg-[#003366] bottom-0 w-full transition-all ease-in-out duration-150 text-white p-8
        ${isOpen ? ' translate-x-0 z-[99]' : 'translate-x-[-100%] z-0'}
        `}>
          <ul className="grid gap-y-4 pl-1 py-2">
          {navLinks.map((link) => {
            const { id, title, path } = link;
            return (
              <li key={id}>
                <Link
                  href={path} 
                  className={`capitalize text-lg xl:text-xl tracking-wide poppins-medium px-3 py-1 transition-all ease-in-out duration-150 hover:pl-4 hover:text-[#00D9F5]`}
                >
                  {title}
                </Link>
              </li>
            );
          })}
              </ul>
        </aside>
  )
}

export default Sidebar