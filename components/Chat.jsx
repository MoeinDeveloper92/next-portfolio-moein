import React from 'react'
import UserMessage from './UserMessage'
import BotMessage from './BotMessage'

const Chat = ({ message }) => {
    return (
        <div className='text-black flex flex-col gap-[20px] mt-3'>
            {message.role === "user" ? (
                <UserMessage
                    message={message}
                />
            ) : (
                <BotMessage
                    message={message}
                />
            )}
        </div>
    )
}

export default Chat