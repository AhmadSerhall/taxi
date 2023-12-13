import React from "react";
import './style.css';

const RecievedMessage = ({message_id, ride_id, sender_id, reciever_id, message_content, created_at, updated_at}) => {
    return(
        <div className='recieved_message' reciever_id = {reciever_id} sender_id = {sender_id} ride_id = {ride_id} message_id = {message_id}>
            <p className='recieved_message_text'>{message_content}</p>
            <p className='recieved_message_date'>{updated_at !== null? updated_at:created_at}</p>
        </div>
    )
}

export default RecievedMessage