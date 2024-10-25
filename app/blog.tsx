'use client'

// Component to display the list of blog posts
import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface Post {
  $id: string;
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  createdAt: string;
}

function BlogPost({ post }: { post: Post }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" })

  return (
    <Link href={`/blog/${post.$id}`}>
      <motion.div
        ref={ref}
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, zIndex: 1 }}
      >
        <div className="relative h-64 overflow-hidden">
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            {post.title}
          </h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{post.content}</p>
          <div className="flex justify-between items-center text-sm text-gray-400">
            <span>{post.author}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([])
  const [error, setError] = useState<string | null>(null)
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: false, margin: "-100px 0px" })

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching posts...')
        const response = await fetch('/api/posts')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        console.log('Fetched posts:', data)
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setError('Failed to fetch posts. Please try again later.')
      }
    }

    fetchPosts()
  }, [])

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={headerRef}
          className="text-5xl md:text-6xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Blog
        </motion.h2>
        {posts.length === 0 ? (
          <p className="text-center text-xl text-gray-400">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <BlogPost key={post.$id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
