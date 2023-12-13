import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ChatThread from './components/chat_thread';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatThread/>
  </React.StrictMode>
);

