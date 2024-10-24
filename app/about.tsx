'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLazyLoad } from './useLazyLoad'

export default function About() {
  const { isVisible, ref } = useLazyLoad()
  const [text, setText] = useState('')
  const fullText = "Hi, I'm Shah Md. Ekteder. I'm a passionate developer..."

  useEffect(() => {
    if (isVisible) {
      let index = 0
      const intervalId = setInterval(() => {
        setText(fullText.slice(0, index))
        index++
        if (index > fullText.length) {
          clearInterval(intervalId)
        }
      }, 50)

      return () => clearInterval(intervalId)
    } else {
      setText('')
    }
  }, [isVisible])

  return (
    <section id="about" className="py-24 bg-gray-800" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            className="w-64 h-64 rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img src="/IMG_2841.webp" alt="Shah Md. Ekteder" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            className="max-w-lg text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl mb-6 text-gray-300">
              {text}
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
