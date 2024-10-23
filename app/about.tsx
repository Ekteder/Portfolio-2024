'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from './useInView'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} id="about" className="py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            className="w-64 h-64 rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/IMG_2841.jpg" alt="Shah Md. Ekteder" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="max-w-lg text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl mb-6 text-gray-300">
              Hi, I&apos;m Shah Md. Ekteder. I&apos;m a passionate developer with a keen eye for design and a love for creating
              seamless user experiences. With expertise in React, Next.js, and modern web technologies, I bring ideas to
              life through clean, efficient code and intuitive interfaces.
            </p>
            <p className="text-xl text-gray-300">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying the great outdoors.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
