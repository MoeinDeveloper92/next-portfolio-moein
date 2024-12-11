import React from 'react'
import { motion } from "framer-motion"

//varinats configuration
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["0%", "100%"]
    }
}

//calculate the reverse index effect for stagger delay

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1
}
const Stairs = () => {
    return (
        <>
            {/* render a motion div, each representin a step of the stair
            each div will habe the same animation define  by the staros animation object
            The delaty for each div is calculated sinamically based on it's reversed index
            creating a staggered effect with decreasing effect for each subsequent stair
            */}
            {[...Array(6)].map((_, index) => {
                return <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1
                    }}
                    className='h-full w-full bg-white relative'
                />


            })}

        </>
    )
}

export default Stairs