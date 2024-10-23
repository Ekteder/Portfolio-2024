import Home from './home'
import Projects from './projects'
import About from './about'
import Skills from './skills'
import Blog from './blog'
import Contact from './contact'
import AnimatedCursor from './cursor'

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <AnimatedCursor />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
