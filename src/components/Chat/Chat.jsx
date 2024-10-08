import React, { useState } from 'react';
import '../../styles/Chat.css'; 

const Chat = ({ users }) => {
  const [selectedUsers, setSelectedUsers] = useState([]); 
  const [messages, setMessages] = useState({});
  const [newMessages, setNewMessages] = useState({});

  const handleUserClick = (user) => {
    if (!selectedUsers.includes(user)) {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleCloseChat = (userId) => {
    setSelectedUsers(selectedUsers.filter(user => user.id !== userId));
  };

  const handleSendMessage = (user) => {
    if (newMessages[user.id]?.trim()) {
      const userMessages = messages[user.id] || [];
      setMessages({
        ...messages,
        [user.id]: [...userMessages, { text: newMessages[user.id], isSentByUser: true }],
      });
      setNewMessages({ ...newMessages, [user.id]: '' });
    }
  };

  const handleInputChange = (e, userId) => {
    setNewMessages({ ...newMessages, [userId]: e.target.value });
  };

  return (
    <div className="chat-container">
      <div className="users-list-container">
        <h2>Chats</h2>
        {users.map((user) => (
          <div key={user.id} className="chat-user" onClick={() => handleUserClick(user)}>
            <img className="avatar" src={user.image} alt={user.name} />
            {user.name}
          </div>
        ))}
      </div>
      {selectedUsers.length > 0 && (
        <div className="chat-windows-container">
          {selectedUsers.map((user) => (
            <div key={user.id} className="chat-window">
              <div className="chat-header">
                <div className="chat-header-avatar">
                  <img className="chat-header-avatar-img" src={user.image} alt={user.name} />
                  <h4>{user.name}</h4>
                </div>
                <button className="close-button" onClick={() => handleCloseChat(user.id)}>×</button>
              </div>
              <div className="messages-container">
                {messages[user.id]?.map((msg, index) => (
                  <div key={index} className={`message-bubble ${msg.isSentByUser ? 'sent' : 'received'}`}>
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="input-container">
                <input
                  className="message-input"
                  value={newMessages[user.id] || ''}
                  onChange={(e) => handleInputChange(e, user.id)}
                  placeholder="Type a message..."
                />
                <button className="send-button" onClick={() => handleSendMessage(user)}>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Chat;
