'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { useInView } from './useInView'

const blogPosts = [
  { id: 1, title: 'Getting Started with React', excerpt: 'Learn the basics of React and start building your first component.' },
  { id: 2, title: 'Advanced TypeScript Techniques', excerpt: 'Dive deep into TypeScript and learn advanced types and patterns.' },
  { id: 3, title: 'Optimizing Next.js Applications', excerpt: 'Discover techniques to improve the performance of your Next.js apps.' },
]

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <span className="text-purple-400 hover:text-purple-300 transition-colors">Read more</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}