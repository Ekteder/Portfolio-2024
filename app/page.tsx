import dynamic from 'next/dynamic'
import Home from './home'
import AnimatedCursor from './cursor'

const DynamicProjects = dynamic(() => import('./projects'), {
  loading: () => <p>Loading...</p>
})
const DynamicAbout = dynamic(() => import('./about'), {
  loading: () => <p>Loading...</p>
})
const DynamicSkills = dynamic(() => import('./skills'), {
  loading: () => <p>Loading...</p>
})
const DynamicBlog = dynamic(() => import('./blog'), {
  loading: () => <p>Loading...</p>
})
const DynamicContact = dynamic(() => import('./contact'), {
  loading: () => <p>Loading...</p>
})

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <AnimatedCursor />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <DynamicProjects />
      </section>
      <section id="about">
        <DynamicAbout />
      </section>
      <section id="skills">
        <DynamicSkills />
      </section>
      <section id="blog">
        <DynamicBlog />
      </section>
      <section id="contact">
        <DynamicContact />
      </section>
    </main>
  )
}
