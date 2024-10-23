'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const menuItems = [
  { name: 'Home', path: '#home' },
  { name: 'Projects', path: '#projects' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Blog', path: '#blog' },
  { name: 'Contact', path: '#contact' },
]

const TypingAnimation = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText(text.slice(0, index + 1))
        setIndex(index + 1)
      } else if (isDeleting && index > 0) {
        setDisplayText(text.slice(0, index - 1))
        setIndex(index - 1)
      } else if (index === text.length) {
        setIsDeleting(true)
      } else if (index === 0) {
        setIsDeleting(false)
      }
    }, 150)

    return () => clearInterval(intervalId)
  }, [text, isDeleting])

  return (
    <span className="inline-block min-w-[1ch]">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      >
        |
      </motion.span>
    </span>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-[#0c1022] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="#home">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Shah Md. Ekteder
              </h1>
            </Link>
          </motion.div>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <motion.span
                key={item.name}
                className="text-white hover:text-purple-400 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.path}>{item.name}</Link>
              </motion.span>
            ))}
          </div>
          <motion.button
            className="md:hidden text-white p-2 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-colors z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-80 backdrop-blur-md shadow-lg z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col items-center justify-center h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className="text-2xl font-semibold text-white hover:text-purple-400 transition-colors p-4"
                    onClick={handleMenuClick}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 px-4 md:px-0">
        <section id="home" className="container mx-auto flex flex-col md:flex-row items-center justify-between min-h-screen">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-[1.2em] flex items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TypingAnimation text="Shah Md. Ekteder" />
            </motion.h2>
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Creative Developer
            </motion.h3>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Crafting digital experiences that inspire and engage. Bringing ideas to life through code and creativity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors cursor-pointer">
                Hire Me
              </Link>
            </motion.div>
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 w-fit mx-auto md:mx-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { Icon: Facebook, href: "https://www.facebook.com/ekteder.sanglap", color: "#4267B2" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/shah-md-ekteder-88b05928b/", color: "#0077B5" },
                { Icon: Twitter, href: "https://x.com/ekteder", color: "#1DA1F2" }
              ].map(({ Icon, href, color }, index) => (
                <motion.a 
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-[2px] cursor-pointer"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 10,
                    boxShadow: `0 0 20px ${color}`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <motion.div 
                    className="w-full h-full rounded-full bg-[#0c1022] flex items-center justify-center"
                    whileHover={{ 
                      backgroundColor: color,
                    }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[410px] md:h-[410px] mx-auto animate-float">
              {/* Gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin-slow"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-purple-500 opacity-50 blur-xl animate-pulse"></div>
              {/* Image container */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden z-10">
                <Image
                  src="/IMG_2841.jpg"
                  alt="Shah Md. Ekteder"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ChevronDown className="animate-bounce text-white opacity-50" size={32} />
        </motion.div>
      </main>
    </div>
  )
}
