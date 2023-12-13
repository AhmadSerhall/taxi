import React from 'react'
import './style.css'
import SentMessage from '../sent_message'
import RecievedMessage from '../recieved_messages'
import MessageInput from '../message_input'


const ChatThread = () => {
    return(
        <div className='chat'>
            <p>Support</p>
            <div className='thread_container'>
                <div className='thread'>
                    <RecievedMessage message_id = {1} ride_id = {3} sender_id = {2} reciever_id = {1} message_content = {'dkdfjfjfndndndjdndjdj dmdjd jdjf kckd jdnd kdkd ddddd dddddddd'} created_at = {'4:32pm'} updated_at = {null} />
                    <SentMessage message_id = {1} ride_id = {3} sender_id = {2} reciever_id = {1} message_content = {'dkdfjfjfndndndjdndjdj dmdjd jdjf kckd jdnd kdkd ddddd dddddddd'} created_at = {'4:32pm'} updated_at = {null} />
                </div>
                <MessageInput/>
            </div>
        </div>
    )
}

export default ChatThread;
