"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import style from "./Navbar.module.css"
import Logo from './Logo'
import dynamic from 'next/dynamic'
const AosInit = dynamic(() => import('../shared/AosInt'), { ssr: true });

function Navbar() {

  const pathName = usePathname()

  const ul = [
    {
      id: 1,
      name: "home",
      path: "/"
    },
    {
      id: 2,
      name: "services",
      path: "/services"
    },
    {
      id: 3,
      name: "awards",
      path: "/awards"
    },
    {
      id: 4,
      name: "about",
      path: "/about"
    },
    {
      id: 5,
      name: "contact",
      path: "/contact"
    },
  ]

  const [open, setOpen] = useState(false)

  return (
    <nav className='bgColor relative w-full top-0 z-50 select-none '>
    {AosInit()}
      <div className="container bgColor  z-50  py-5 mx-auto flex justify-between items-center flex-wrap px-4">

        <Link onClick={() => setOpen(false)} className='flex items-center' aria-label="logo" href="/">
          <Logo />
        </Link>

        <div className={`${style.ulNavbar} bgColor md:bg-transparent md:w-auto justify-center absolute md:static left-0 w-full -z-10 md:z-0 transition-all duration-500  ${open ? "flex mt-12 md:mt-0 top-7" : "flex -top-96 md:opacity-100"}`}>
          <ul className='block  z-50 w-full md:flex'>
            {ul.map((item) => (
              <li className={`md:mx-5 my-8 text-center md:my-0 `} key={item.id}>
                <Link className={`text-base lg:text-lg uppercase  hover:text-grayColor ${pathName === item.path ? "text-grayColor" : "text-white"} transition-all font-semibold`} onClick={() => setOpen(false)} href={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button aria-label="toggle" onClick={() => setOpen(!open)} className='text-neutral-100 md:hidden border rounded-sm p-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>
    </nav>
  )
}

export default Navbar
