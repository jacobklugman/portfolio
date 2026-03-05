import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <Hero />
      <Projects />
      <Contact />
    </main>
  )
}