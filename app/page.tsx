import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Cta />
    </main>
  )
}