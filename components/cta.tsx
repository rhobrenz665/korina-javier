import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Cta = () => {
  return (
    <section className='py-24 bg-popover dark:bg-accent'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-8'>I&apos;m Ready to Assist - Reach Out!</h2>
          <Link href='/contact'>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cta