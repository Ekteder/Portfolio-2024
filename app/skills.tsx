'use client'

import { motion } from 'framer-motion'
import { useLazyLoad } from './useLazyLoad'
import Image from 'next/image'

const skills = [
  { name: 'React', level: 90, logo: '/logos/react.svg' },
  { name: 'Next.js', level: 85, logo: '/logos/nextjs.svg' },
  { name: 'TypeScript', level: 80, logo: '/logos/typescript.svg' },
  { name: 'Node.js', level: 75, logo: '/logos/nodejs.svg' },
  { name: 'CSS/Tailwind', level: 85, logo: '/logos/tailwind.svg' },
  { name: 'GraphQL', level: 70, logo: '/logos/graphql.svg' },
]

export default function Skills() {
  const { isVisible, ref } = useLazyLoad()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Image 
                  src={skill.logo} 
                  alt={`${skill.name} logo`} 
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
