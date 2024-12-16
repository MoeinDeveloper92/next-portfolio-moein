import React from 'react'

const UserMessage = ({ message }) => {
    return (
        <div className='max-w-[445px] p-3 self-end mr-3 rounded-[15px] rounded-br-none bg-[#f0f1f3] text-black'>
            <p>
                {message.content}
            </p>
        </div>
    )
}

export default UserMessage