"use client"
import React from 'react'
import { motion } from "framer-motion"
const Contact = () => {
    return (
        <div className="container mx-auto flex justify-center items-center mt-32">
            <motion.h1 className='text-7xl max-sm:text-xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            > Maintenance Mode</motion.h1>
        </div>
    )
}

export default Contact