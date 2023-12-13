import React from 'react'
import './style.css'

const MessageInput = () => {
    return(
        <div className='message_input'>
            <input type="text" className='input_text'/>
            <button className='send_img'>
            <i className='fas fa-chevron-right icon'></i>
            </button>
        </div>
    )
}

export default MessageInput