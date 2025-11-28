import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}
