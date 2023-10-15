"use client"

import { NAV_LINKS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect,useState } from 'react';

const Navbar = () => {
  const [nav,setNav] = useState(false)

  const handleNav = ()=>{
    setNav(!nav)
  }
  useEffect(()=>{
    Aos.init({offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,});
  },[])
  return (
    <>
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" data-aos="fade-up">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
          data-aos="fade-down" 
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <div data-aos="fade-down"><Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"/></div>
      </div>

      <Image onClick={handleNav} src="menu.svg" alt='menu' width={32} height={32} className='inline-block cursor-pointer lg:hidden' data-aos="fade-right"/>

      
    </nav>
    <div className={nav ? ' z-50 fixed left-0 top-0 w-full h-screen bg-black/70':''}>
        <div className={nav?"fixed left-0 top-0 w-[75%] sm:w-[45%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500":"fixed left-[-100%] p-10 top-0 ease-in duration-500"}>
          <div>
            <div className='flex w-full items-center justify-between'>
            <Link href="/" data-aos="fade-up">
              <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
            </Link>
            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 py-1 cursor-pointer'>
              x
            </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let's explore the world</p>
            </div>
          </div>
          <div className='py-4'>
            <ul className="capitalize flex flex-col gap-5 mt-4">
              {NAV_LINKS.map((link) => (
                <Link
                data-aos="fade-down" 
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-50 cursor pointer pb-1.5 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <div className='mt-5 ml-[-10px]'>
              <div data-aos="fade-down"><Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green"/></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
