import React, { useState } from "react";
import "./style.css";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const openForm = () => {
    setIsChatOpen(true);
  };

  const closeForm = () => {
    setIsChatOpen(false);
  };

  return (
    <section>
      <button type="submit" className="chat-circle" onClick={openForm}>
        <div className="chat-overlay"></div>
        <i className="material-icons">Chat</i>
      </button>
      {isChatOpen && (
        <div className="chat-box" id="chat-box">
          <div className="chat-box-header">
            Username
            <button className="chat-box-toggle" onClick={closeForm}>
              <i className="material-icons">close</i>
            </button>
          </div>
          <div className="chat-box-body">
            <div className="chat-box-overlay"></div>
            <div className="chat-logs"></div>
          </div>
          <div className="chat-input">
            <form>
              <input
                type="text"
                id="chat-input"
                placeholder="Send a message..."
              />
              <button type="submit" className="chat-box-send" id="chat-submit">
                <i className="material-icons">send</i>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Chat;
