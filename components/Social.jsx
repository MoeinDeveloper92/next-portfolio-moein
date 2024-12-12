import React from 'react'
import Link from 'next/link'
import { socials } from '@/constant'
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const Social = () => {
    return (
        <div className='flex gap-8'>
            {socials.map((social, index) => (
                <TooltipProvider key={index}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href={social.path} className=' w-9 h-9 border-accent border-[1px]  text-accent text-base rounded-full flex items-center justify-center hover:bg-accent hover:text-primary hover:transition-all duration-500 '>
                                {social.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{social.content}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </div>
    )
}

export default Social