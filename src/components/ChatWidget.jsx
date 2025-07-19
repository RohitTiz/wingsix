import React, { useState } from 'react';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can we help you today?', sender: 'bot' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    setNewMessage('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: 'Thanks for your message! Our team will get back to you soon.', 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat bubble button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4a6cf7 0%, #6a8cff 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(74, 108, 247, 0.3)',
          zIndex: 1000,
          transition: 'all 0.2s ease',
          ':hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 6px 16px rgba(74, 108, 247, 0.4)'
          }
        }}
      >
        {isOpen ? <FaTimes size={18} /> : <FaComment size={18} />}
      </div>

      {/* Chat window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '82px',
          right: '20px',
          width: '300px',
          maxWidth: '90vw',
          height: '380px',
          background: 'white',
          borderRadius: '14px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 1000,
          overflow: 'hidden',
          fontFamily: '"Robusta", sans-serif',
        }}>
          {/* Gradient header */}
          <div style={{
            padding: '16px',
            background: 'linear-gradient(135deg, #4a6cf7 0%, #6a8cff 100%)',
            color: 'white',
            fontWeight: '600',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            letterSpacing: '0.3px'
          }}>
            <FaComment style={{ marginRight: '10px', fontSize: '16px' }} />
            Live Chat
          </div>

          {/* Messages container */}
          <div style={{
            flex: 1,
            padding: '16px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            background: 'linear-gradient(to bottom, #f9faff 0%, #ffffff 100%)'
          }}>
            {messages.map((message, index) => (
              <div 
                key={index}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: message.sender === 'user' 
                    ? 'linear-gradient(135deg, #4a6cf7 0%, #6a8cff 100%)' 
                    : '#ffffff',
                  color: message.sender === 'user' ? 'white' : '#1b3a57',
                  padding: '10px 14px',
                  borderRadius: message.sender === 'user' 
                    ? '14px 14px 0 14px' 
                    : '14px 14px 14px 0',
                  maxWidth: '85%',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  fontFamily: '"Robusta", sans-serif'
                }}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input area */}
          <div style={{
            padding: '12px',
            borderTop: '1px solid #e8ecf7',
            display: 'flex',
            gap: '10px',
            background: 'white'
          }}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              style={{
                flex: 1,
                padding: '10px 14px',
                border: '1px solid #e8ecf7',
                borderRadius: '10px',
                outline: 'none',
                fontSize: '14px',
                fontFamily: '"Robusta", sans-serif',
                transition: 'border 0.2s ease',
                ':focus': {
                  borderColor: '#4a6cf7'
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                background: 'linear-gradient(135deg, #4a6cf7 0%, #6a8cff 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                ':hover': {
                  opacity: '0.9'
                }
              }}
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Robusta font import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Robusta:wght@400;500;600&display=swap');
      `}</style>
    </>
  );
};

export default ChatWidget;