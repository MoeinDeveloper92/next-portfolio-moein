import React, { useEffect, useState } from 'react'
import monkey from "@/assets/monkey.svg"
import Image from 'next/image'


export const typingEffect = (message, onUpdate, speed = 50) => {
    let index = 0
    let str = ""

    return new Promise((resolve) => {
        const interval = setInterval(() => {
            if (index < message.length) {
                str += message[index]
                onUpdate(str)
                index++
            } else {
                clearInterval(interval)
                resolve()
            }
        }, speed)
    })
}

const BotMessage = ({ message }) => {
    const [typedMessage, setTypedMessage] = useState("") 

    useEffect(() => {
        setTypedMessage("")
        typingEffect(message.content, setTypedMessage, 10)
    }, [message.content])

    return (
        <div className='flex max-w-[400px] p-3 gap-3  ml-3'>
            <div className='self-end'>
                <Image
                    src={monkey}
                    width={32}
                    height={32}
                    priority={true}
                    alt='Bot Image'
                />
            </div>
            <div className='flex-1 bg-[#f0f3e3] p-3 rounded-[15px] rounded-bl-none'>
                {typedMessage}
            </div>
        </div>
    )
}

export default BotMessage
