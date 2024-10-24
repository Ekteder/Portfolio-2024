import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Home from './home'
import AnimatedCursor from './cursor'

const DynamicProjects = dynamic(() => import('./projects'), {
  loading: () => <div>Loading Projects...</div>
})
const DynamicAbout = dynamic(() => import('./about'), {
  loading: () => <div>Loading About...</div>
})
const DynamicSkills = dynamic(() => import('./skills'), {
  loading: () => <div>Loading Skills...</div>
})
const DynamicBlog = dynamic(() => import('./blog'), {
  loading: () => <div>Loading Blog...</div>
})
const DynamicContact = dynamic(() => import('./contact'), {
  loading: () => <div>Loading Contact...</div>
})

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <AnimatedCursor />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Suspense fallback={<div>Loading Projects...</div>}>
          <DynamicProjects />
        </Suspense>
      </section>
      <section id="about">
        <Suspense fallback={<div>Loading About...</div>}>
          <DynamicAbout />
        </Suspense>
      </section>
      <section id="skills">
        <Suspense fallback={<div>Loading Skills...</div>}>
          <DynamicSkills />
        </Suspense>
      </section>
      <section id="blog">
        <Suspense fallback={<div>Loading Blog...</div>}>
          <DynamicBlog />
        </Suspense>
      </section>
      <section id="contact">
        <Suspense fallback={<div>Loading Contact...</div>}>
          <DynamicContact />
        </Suspense>
      </section>
    </main>
  )
}
