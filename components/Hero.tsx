'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold mb-4"
      >
        Hi, I am Jacob
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-400 max-w-lg"
      >
        Full-stack developer building modern web apps with React, Next.js and Node.js
      </motion.p>
      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 px-6 py-3 bg-sky-600 rounded-xl hover:bg-sky-700 transition-colors"
      >
        View my work
      </motion.a>
    </section>
  )
}