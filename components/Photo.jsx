"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import profilePicture from "@/assets/profilePicture.png"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            {/* Main container for the image */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4, ease: "easeIn" }}
            >
                {/* Image container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5, ease: "easeInOut" }}
                    className="w-[330px] bg-primary h-[330px] xl:w-[498px] xl:h-[498px] mix-blend-lighten rounded-full relative">
                    <Image
                        src={profilePicture}
                        priority={true}
                        quality={100}
                        fill
                        alt="Profile Picture"
                        className="object-contain rounded-full shadow-2xl shadow-white hover:shadow-lg transition-shadow cursor-pointer duration-300"
                    />
                </motion.div>

                {/* Swirling dotted line around the image */}
                <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <motion.svg
                        className="w-[360px] h-[360px] xl:w-[528px] xl:h-[528px]"
                        fill="transparent"
                        viewBox="0 0 528 528"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <motion.circle
                            cx="264"
                            cy="264"
                            r="260"
                            stroke="#00ff99"
                            strokeWidth="2"
                            strokeDasharray="100 200"
                            strokeLinecap="round"
                            initial={{
                                strokeDashoffset: 0,
                                rotate: 0
                            }}
                            animate={{
                                strokeDashoffset: [0, -500],
                                rotate: [0, 360]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 10,
                                ease: "linear",
                                repeatType: "reverse"
                            }}
                        />
                    </motion.svg>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo
