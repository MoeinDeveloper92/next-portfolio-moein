"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { fetchMessage } from '@/utils/request'
import Chat from './Chat'

const ChatBot = () => {
    const [messages, setMessages] = useState([])
    const [prompt, setPrompt] = useState("")
    const [chatBotOpen, setChatBotOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Add user message to the chat
        setMessages((preMessages) => [...preMessages, { role: "user", content: prompt }])

        // Reset the input
        setPrompt("")

        try {
            const data = await fetchMessage(prompt)
            const assistantMessage = typeof data === 'object' && data.message ? data.message : data
            setMessages((preMessages) => [...preMessages, { role: "assistant", content: assistantMessage }])
        } catch (error) {
            console.error('Error fetching message:', error)
            setMessages((preMessages) => [...preMessages, { role: "assistant", content: "Something went wrong. Please try again." }])
        }
    }

    return (
        <div className={`fixed ${chatBotOpen ? "bottom-0 max-sm:bottom-[1px] max-sm:right-0 " : "bottom-[-560px] max-sm:right-0  max-sm:bottom-[-560px]"}  transition-all duration-300  right-4 cursor-pointer`} >
            <form onSubmit={handleSubmit} className='flex flex-col  w-[500px] h-[600px] max-sm:w-[400px]  border-[1px] border-black rounded-md' action="">
                <header onClick={() => setChatBotOpen((pre) => !pre)} className='h-[40px] bg-gray-500 flex justify-center items-center'>
                    <p>Chatbot</p>
                </header>
                <main className='flex-1  bg-white overflow-y-scroll'>
                    {messages.length !== 0 && messages.map((message, index) => (
                        <Chat
                            message={message}
                            key={index}
                        />
                    ))}
                </main>
                <footer className='h-[40px] flex items-center justify-between w-full self-stretch'>
                    <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder='Type something...'
                        className='w-full px-2 text-black outline-none resize-none border-[1px] border-black'
                    />
                    <button className='bg-black w-[90px] h-[50px]'>
                        Submit
                    </button>
                </footer>
            </form>
        </div>
    )
}

export default ChatBot
