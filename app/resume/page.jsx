"use client"
import React from 'react'
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs
} from "react-icons/fa"
import {
    SiTailwindcss,
    SiNextdotjs,

} from "react-icons/si"

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from "framer-motion"
import { about, education, experiences, skills } from '@/constant'
const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn" } }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-10'
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] xl:mx-0 max-xl:mx-auto  gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        {/* Experiences */}
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] xl:text-left text-center'>
                                <h3 className='text-4xl font-bold'>{experiences.title}</h3>
                                <p className='max-w-[600px]  text-white/60 mx-auto xl:mx-0'>{experiences.description}</p>
                                <ScrollArea className="h-[300px]" >
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experiences.items.map((item, index) => (
                                            <li key={index} className='shadow-white bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex-col justify-centeritesce lg:items-start gap-1
                                             '>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[250px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[5px] h-[5px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Education */}

                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] xl:text-left text-center'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px]  text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea scrollbarColor={"#fff"} className="h-[300px]" >
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => (
                                            <li key={index} className='shadow-white bg-[#232329] h-[150px] py-6 px-10 rounded-xl flex-col justify-centeritesce lg:items-start gap-1
                                             '>
                                                <span className='text-accent'>{item.degree}</span>
                                                <h3 className='text-xl max-w-[250px] min-h-[60px] text-center lg:text-left'>{item.institution}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[5px] h-[5px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.duration}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[38px]">
                                <div className='flex flex-col gap-[30px] items-center xl:items-start'>
                                    <h3 className='font-bold text-4xl'>{skills.title}</h3>
                                    <p className='max-w-[500px]'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]  gap-4 '>
                                    {skills.skillList.map((skill, index) => (
                                        <li key={index}>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl  flex items-center justify-center'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <div className=' capitalize'>    {skill.name}</div>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col  gap-5 '>
                                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                                    <p className='text-xl max-w-[600px] text-white/60 xl:mx-0 mx-auto' >{about.description}</p>
                                </div>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => (
                                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}:</span>
                                            <span>{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume