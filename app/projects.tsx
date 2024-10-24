"use client";

import Image from 'next/image'
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useLazyLoad } from "./useLazyLoad";

const projects = [
  {
    id: 1,
    title: "Facebook.com Clone",
    description:
      "A complete replica of the Facebook login page, featuring an exact copy of the layout, design, and functionality from start to finish.",
    image: "/Facebook-Cloning.webp",
    link: "https://facebook-clone-shah.vercel.app/",
  },
  {
    id: 2,
    title: "Still In Progress",
    description: "A brief description of Project 2",
    image: "/sddefault.jpg",
  },
  {
    id: 3,
    title: "Still In Progress",
    description: "A brief description of Project 3",
    image: "/sddefault.jpg",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { isVisible, ref } = useLazyLoad();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-24 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg"
              variants={itemVariants}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                width={400} 
                height={300} 
                className="w-full h-64 object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col justify-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
