import { GetServerSideProps } from "next";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import '@/app/globals.css'
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };

  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    if (!res.ok) {
      console.error(`API response not ok. Status: ${res.status}`);
      throw new Error(`Failed to fetch post. Status: ${res.status}`);
    }
    const post = await res.json();
    console.log("Fetched post data:", post);

    if (!post) {
      console.error("Post data is null or undefined");
      throw new Error("Post data is null or undefined");
    }

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return {
      notFound: true,
    };
  }
};

interface PostProps {
  post: {
    title: string;
    imageUrl: string;
    author: string;
    createdAt: string;
    content: string;
  };
}

export default function Post({ post }: PostProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div style={{ 
        minHeight: "100vh", 
        backgroundColor: "#0C1022", 
        color: "white", 
        paddingTop: "6rem",
      }}>
        <Link href="/#blog"
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            padding: "0.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.3s ease",
            zIndex: 1000,
            transform: isHovered ? "scale(1.1) rotate(-10deg)" : "scale(1) rotate(0deg)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <IoArrowBack size={24} color={isHovered ? "#E94B9E" : "white"} />
        </Link>

        <div style={{ 
          maxWidth: "64rem", 
          margin: "0 auto", 
          padding: "0 1rem" 
        }}>
          <motion.h1 
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "2rem",
              textAlign: "center",
              background: "linear-gradient(to right, #a78bfa, #ec4899, #ef4444)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {post.title}
          </motion.h1>
          
          <motion.div 
            style={{
              position: "relative",
              width: "100%",
              height: "400px",
              marginBottom: "3rem",
              borderRadius: "0.75rem",
              overflow: "hidden",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, #a855f7, #ec4899)",
              opacity: 0.5,
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}></div>
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "0.75rem" }}
            />
          </motion.div>
          
          <motion.div
            style={{
              backgroundColor: "rgba(31, 41, 55, 0.5)",
              borderRadius: "0.75rem",
              padding: "2rem",
              marginBottom: "3rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p style={{ color: "#d1d5db", lineHeight: 1.625, fontSize: "1.125rem" }}>{post.content}</p>
          </motion.div>
          
          <motion.div 
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.875rem",
              backgroundColor: "rgba(31, 41, 55, 0.5)",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span style={{ fontWeight: 600, color: "#a78bfa" }}>By {post.author}</span>
            <span style={{ color: "#ec4899" }}>{new Date(post.createdAt).toLocaleDateString()}</span>
          </motion.div>
        </div>
      </div>
    </>
  );
}
