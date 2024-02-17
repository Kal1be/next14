"use client"
import { useState,useEffect } from "react";
import Image from "next/image";
import { Poppins } from 'next/font/google';
import "./navbar.css"
import Link from "next/link";
import Links from "./links/Links";
function Navbar() {
  const [open,setOpen] = useState<boolean>(false)
    const [navbar,setNavbar] = useState(true)
//    const [search,setSearch] = useState(true)
  useEffect(()=>{
const handleScroll = ()=>{
  if(window.pageYOffset > 200 && navbar){
    setNavbar(false)
  }
  else if (window.pageYOffset<= 200 !==navbar){
    setNavbar(true)
  }
 
}
window.addEventListener("scroll",handleScroll)
return()=>{
  window.removeEventListener("scroll",handleScroll)
}
  },[navbar])
  return (
 <div className="my-nav">
    {/*+++++++++++++++++++++++_ the first navbar and is element++++++++++++++++++++++++++++++++ */}
       <div className='flex justify-between items-center md:py-2 py-2 bg-white md:px-8 px-2 '>
    <div>
    <h3 className='text-blue-900 text-2xl font-extrabold'><Link href="/">Tuition An<span className="text-green-500">a</span>lyst</Link></h3>
    <h4 className="text-lg opacity-55 px-1 text-gray-600 -my-2">course</h4>
    </div>
    <div >
      <div className="barnav">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="navbar">
        
        <Links/>
      </div>
    </div>
    </div>
    {/*_+++++++++++++++++++++++++++ the second navbar and is own element _+++++++++++++++++++++++++++++++++++++++ */}
 
    <div id={navbar?"nav":"header"}>
    <div className='flex justify-between items-center md:py-2 py-2 md:px-8 shadow-xl px-2' >
    <div>
    <h3 className='text-blue-900 text-2xl font-extrabold'>Tuition An<span className="text-green-500">a</span>lyst</h3>
    <h4 className="text-lg opacity-55 px-1 text-gray-600 -my-2">course</h4>
    </div>
    <div >
      <div className="barnav">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div id="navbar">
        <Links/>
      </div>
    </div>
    </div>
    </div>
 </div>
  )
}

export default Navbar

