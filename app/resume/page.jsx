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
                    <TabsList className="flex flex-col w-full max-w-[380px] xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        {/* Experiences */}
                        <TabsContent value="experience" className="w-full">
                            Experience
                        </TabsContent>
                        {/* Education */}
                        <TabsContent value="education" className="w-full">
                            Education
                        </TabsContent>
                        {/* Skills */}
                        <TabsContent value="skills" className="w-full">
                            Skills
                        </TabsContent>
                        {/* About */}
                        <TabsContent value="about" className="w-full">
                            about Me
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume