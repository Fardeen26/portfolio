'use client'
import React from 'react'
import { motion } from 'framer-motion'
import BlogList from './components/BlogList'

const page = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className='mt-44 max-sm:mt-28 dark:bg-black'>
      <BlogList />
    </motion.div>
  )
}

export default page