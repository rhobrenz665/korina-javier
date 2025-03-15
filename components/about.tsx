import React, { JSX } from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { User2, MailIcon, PhoneCall, GraduationCap, Calendar, Briefcase, HomeIcon } from 'lucide-react'
import ProfilePhoto from './profile-photo'


type Education = {
  school: string;
  years: string;
};

type Experience = {
  company: string;
  role: string;
  years: string;
};

type QualificationData = {
  title: "education" | "experience";
  data: Education[] | Experience[];
};

type InfoItem = {
  icon: JSX.Element;
  text: string;
};

// type SkillItem = {
//   name: string;
// };

// type SkillCategory = {
//   title: "skills" | "tools"; // Ensuring only these specific values are allowed
//   data: SkillItem[];
// };



const infoQualificationData: QualificationData[] = [
  {
    title: "education",
    data: [
      { school: "Bachelor of Industrial Technology – Electronics & Communications", years: "2022" },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Vertex Solutions",
        role: "Project Coordinator",
        years: "2023 - Present",
      },
      {
        company: "Nexa Assist",
        role: "Administrative Assistant",
        years: "2021 - 2023",
      },
      {
        company: "Summit Support",
        role: "Customer Support Specialist",
        years: "2019 - 2021",
      },
    ],
  },
];

const infoData: InfoItem[] = [
  {
    icon: <User2 size={20} />,
    text: "Korina Javier",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "0922222222",
  },
  {
    icon: <MailIcon size={20} />,
    text: "korinajavier1996@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on October 04",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Manila, Philippines",
  },
];


// const skillsData: SkillCategory[] = [
//   {
//     title: "skills",
//     data: [
//       { name: "Basic HTML, CSS, Social Media Management, SEO & Blog Management" },
//       { name: "Data Entry & Management" },
//       { name: "Email Management" },
//       { name: "Scheduling & Calendar Management" },
//       { name: "Microsoft Office & Google Suite" },
//       { name: "CRM & Project Management Tools" },
//       { name: "Cloud Storage & Collaboration Tools" },
//       { name: "Basic Graphic Design" },
//       { name: "Basic Video Editing" },
//     ],
//   },
//   {
//     title: "tools",
//     data: [],
//   },
// ];



const About = () => {
  const getInfoByTitle = (title: string, data: QualificationData[]) => {
    return data.find((item) => item.title.toLowerCase() === title.toLowerCase()) || null;
  };

  
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
        <div className='flex flex-col xl:flex-row'>
          <div className="hidden xl:flex flex-1 relative">
            <div className="w-[380px] h-[360px] absolute inset-0 bg-[url('/hero/about-blob-light.svg')] dark:bg-[url('/hero/about-bob-dark.svg')] bg-contain bg-center bg-no-repeat" />
            <ProfilePhoto
              containerStyles="w-[380px] h-[360px] bg-[url('/hero/shape-1-light.svg')] bg-contain bg-no-repeat relative"
              imgSrc="/hero/yna-about-test.jpg"
              imgStyles="w-full h-full object-cover object-bottom"
              maskUrl="/hero/about-blob-light.svg"
            />
          </div>
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className="grid xl:grid-cols-3 xl:max-w-[520px] xl:border xl:border-gray-300 xl:dark:border-gray-600 rounded-[30px] p-1" >
                  <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                  <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Career Info</TabsTrigger>
                  <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
              </TabsList>
              <div className='text-lg mt-12 xl:mt-8'>
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Helping You Work Smarter, Not Harder.</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I provide efficient and reliable virtual assistance, ensuring your business stays organized, productive, and stress-free.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map(({ icon, text }, index) => (
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary">{icon}</div>
                          <div>{text}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-2 flex flex-col md:flex-row items-center gap-4">
                      <div className="relative w-[120px] h-[120px] md:w-[200px] md:h-[200px]">
                        <ProfilePhoto
                          containerStyles="relative w-full h-full"
                          imgSrc="/hero/cali-pet.jpg" 
                          imgStyles="object-cover object-center"
                          maskUrl="/hero/cali-blob.svg" 
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-gray-800">Fun Fact</h4>
                        <p className="text-base text-gray-600">
                          Meet my adorable pet BM Cali - a cherished part of my life!
                        </p>
                      </div>
                    </div>


                  </div>
                </TabsContent>
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>A Strong Foundation for Efficient Support.</h3>
                    {/* exp and educ */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* exp */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                              {getInfoByTitle("experience", infoQualificationData)?.title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                        {getInfoByTitle("experience", infoQualificationData)?.data?.map((item, index) => {
                            if ("company" in item && "role" in item) { 
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div> 
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">{item.company}</div>
                                    <div className="text-lg leading-none text-muted-foreground">{item.role}</div>
                                    <div className="text-base font-medium">{item.years}</div>
                                  </div>
                                </div>
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                      <div>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap />
                          <h4 className='capitalize font-medium'>
                            {getInfoByTitle("education", infoQualificationData)?.title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className='flex flex-col gap-y-8'>
                        {getInfoByTitle("education", infoQualificationData)?.data?.map((item, index) => {
                              const edu = item as { school: string; years: string };
                              return (
                                <div key={index} className='flex gap-x-8 group'>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>{edu.school}</div>
                                    <div className='text-base font-medium'>{edu.years}</div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='skills'>skills</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;