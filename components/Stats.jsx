"use client"
import React from 'react'
import CountUp from 'react-countup'
import { stats } from '@/constant'


const Stats = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex gap-12 justify-center max-sm:grid max-sm:grid-cols-2'>
                {stats.map((stat, index) => (
                    <div key={index} className='flex flex-col items-center '>
                       
                        <CountUp
                            end={stat.num}
                            duration={5}
                            delay={0.5}
                            className='text-4xl xl:text-6xl font-extrabold order-1'
                        />
                        <span className='order-2 text-accent/50 text-xl max-sm:text-center'>
                            {stat.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stats