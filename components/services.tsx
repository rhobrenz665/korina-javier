import React,  { JSX } from 'react'
import { GanttChartSquare, Blocks, Gem} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface Service  {
  icon: JSX.Element,
  title: string,
  description: string

}

const services = () => {
  const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8}/>,
        title: 'WebDesign',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nem praesentium sapiente odio ab placeat sed culpa repellat.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8}/>,
        title: 'Test 3',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nem praesentium sapiente odio ab placeat sed culpa repellat.'
    },
    {
        icon: <Gem size={72} strokeWidth={0.8}/>,
        title: 'Test 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nem praesentium sapiente odio ab placeat sed culpa repellat.   piente odio ab placeat sed culpa repellat.  piente odio ab placeat sed culpa repellat.  piente odio ab placeat sed culpa repellat.'
    },
  ]

  return (
    <section className='mb-12 xl:mb-36'>
        <div className="container mx-auto">
            <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>My Services</h2>
            {/* Grid items */}
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8 '>
                {servicesData.map((item : Service, index) => {
                    return <Card className='bg-white dark:bg-background w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                       <CardHeader className='text-primary absolute -top-[50px]'>
                            <div className='w-[140px] h-[80px] flex justify-center items-center bg-white dark:bg-background'>{item.icon}</div>
                       </CardHeader>
                       <CardContent className='text-center'>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>{item.description}</CardDescription>
                       </CardContent>
                    </Card>
                })}
            </div>
        </div>
    </section>
  )
}

export default services