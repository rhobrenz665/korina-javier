'use client';
import React, { useState, useEffect } from 'react'
import ThemeToggler from './toogler-main'
import Logo from './logo'
import Nav from './nav'
import MobileNav from './mobile-nav'
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all
    ${pathName === '/' && 'bg-[#fef9f5]'}`}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav 
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header
