"use client"
import React from 'react'
import { BsArrowDownRight } from "react-icons/bs"
import { services } from '@/constant'
import { motion } from "framer-motion"
import Link from 'next/link'


const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center  py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: 2,
                        duration: 0.4,
                        ease: "easeIn"
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 max-sm:overflow-x-hidden gap-[60px]'
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='flex flex-col justify-center gap-4 group'
                        >
                            {/* top */}
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover flex-1'>
                                    {service.num}
                                </div>
                                <Link href={`${service.href}`} className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45">
                                    <BsArrowDownRight className='text-primary text-3xl' />
                                </Link>
                            </div>

                            {/* Heading */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* description */}
                            <p className={`w-full flex-shrink-0 text-white/50`}>{service.description}</p>
                            {/* Order */}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    ))}
                </motion.div>
            </div >
        </section >
    )
}

export default Services