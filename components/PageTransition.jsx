"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'
import { motion } from "framer-motion"
const PageTransition = ({ children }) => {
    const pathName = usePathname()

    return (
        <AnimatePresence>
            <div key={pathName}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0, transition: { delay: 0.4, duration: 0.1, ease: "easeInOut" } }}
                    className='h-screen w-screen fixed bg-primary top-0 pointer-events-none'
                >

                </motion.div>
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition