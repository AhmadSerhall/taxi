import React from 'react';
import './style.css';

const SentMessage = ({message_id, ride_id, sender_id, reciever_id, message_content, created_at, updated_at}) => {
    return(
        <div className='sent_message' reciever_id = {reciever_id} sender_id = {sender_id} ride_id = {ride_id} message_id = {message_id}>
            <p className='sent_message_text'>{message_content}</p>
            <p className='sent_message_date'>{updated_at !== null? updated_at:created_at}</p>
        </div>
    )
}

export default SentMessage;