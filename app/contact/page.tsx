import React from 'react'
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react'
import Form from '@/components/form'
// import ProfilePhoto from '@/components/profile-photo'

const Contact = () => {
  return (
    <section>
     <div className="container mx-auto">
      {/* text and Ill */}
      <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6'>
        {/* text */}
        <div className='flex flex-col justify-center '>
        <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
          <span className="w-8 h-[2px] bg-primary rounded"></span>
          <span className="font-medium tracking-wide">Hi There</span>
        </div>
          <h1 className='h1 max-w-md mb-8'>Let&apos;s Work Together</h1>
          <p className='subtitle max-w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, delectus.</p>
        </div>
        {/* illu */}
        <div className="hidden xl:flex w-full bg-[url('/hero/bg-violet-2.svg')] bg-cover bg-center bg-no-repeat"></div>
              {/* <div className="hidden xl:flex w-full">
                  <ProfilePhoto
                    containerStyles="w-full h-full bg-[url('/hero/shape-1-light.svg')] bg-contain bg-no-repeat flex justify-center items-center relative"
                    imgSrc="/hero/image-bg.png"
                    imgStyles="w-full h-full"
                    maskUrl="/hero/illu.svg"
                  />
              </div> */}
      </div>
      {/* info and text form */}
      <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-base-lg'>
            {/* mail */}
            <div className='flex items-center gap-x-8'>
              <MailIcon size={18} className='text-primary'/>
              <div>korinajavier1996@GMAIL.com</div>
            </div>
           {/* mail */}
           <div className='flex items-center gap-x-8'>
                <MailIcon size={18} className='text-primary'/>
                <div>korinajavier1996@GMAIL.com</div>
            </div>
             {/* address */}
            <div className='flex items-center gap-x-8'>
                <HomeIcon size={18} className='text-primary'/>
                <div>Malolos, Bulacan, Philippines</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-x-8'>
                <PhoneCall size={18} className='text-primary'/>
                <div>0922222</div>
            </div>
          </div>
          <Form />
      </div>
      </div> 
    </section>
  )
}

export default Contact
