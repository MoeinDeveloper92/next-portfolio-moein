"use client"
import React from 'react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci"
import { links } from '@/constant'

const MobileNav = () => {
    const pathName = usePathname()

    return (
        <Sheet>
            <SheetTrigger className='flex justify-center items-center'>
                <CiMenuFries className='text-[32px] text-accent' />
                <SheetContent className="flex flex-col" >
                    <SheetTitle>

                    </SheetTitle>
                    <div className='mt-32 mb-40 text-center text-2xl'>
                        <Link href={"/"}>
                            <h1 className='text-4xl font-semibold'>
                                Moein <span className='text-accent'>.</span>
                            </h1>
                        </Link>
                    </div>
                    <nav className='flex flex-col justify-center items-center gap-8'>
                        {links.map((link, index) => (
                            <Link className={`${link.path === pathName && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`} href={link.path} key={index}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </SheetTrigger>
        </Sheet>
    )
}

export default MobileNav