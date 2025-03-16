import React from 'react'
import Socials from './socials'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-popover py-8">
      <div className="container mx-auto text-center">
        <Socials containerStyles="flex justify-center gap-x-6 mb-4 mx-auto xl:mx-0" iconStyles="text-primary text-[20px]" />
        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} YNAH. All rights reserved.
          <br />
          Developed by{' '}
          <Link href="https://rhobrenz665.github.io/rhobrenzv2/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
            RHOB
          </Link>.
        </div>
      </div>
    </footer>
  )
}

export default Footer
