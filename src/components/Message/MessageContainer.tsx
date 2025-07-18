import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom';
import Message, { MessageType } from './index';

export interface MessageConfig {
  type?: MessageType;
  content: React.ReactNode;
  duration?: number;
  closable?: boolean;
}

let addMessage: (msg: MessageConfig) => void;

const MessageContainer = () => {
  const [messages, setMessages] = useState<MessageConfig[]>([]);

  const remove = useCallback((index: number) => {
    setMessages(msgs => msgs.filter((_, i) => i !== index));
  }, []);

  addMessage = (msg: MessageConfig) => {
    setMessages(msgs => [...msgs, msg]);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 24,
      left: 0,
      right: 0,
      zIndex: 9999,
      pointerEvents: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      {messages.map((msg, idx) => (
        <div key={idx} style={{ pointerEvents: 'auto' }}>
          <Message
            {...msg}
            onInnerClose={() => remove(idx)}
          />
        </div>
      ))}
    </div>
  );
};

// 只挂载一次
const div = document.createElement('div');
document.body.appendChild(div);
ReactDOM.render(<MessageContainer />, div);

export function showMessage(config: MessageConfig) {
  addMessage(config);
} 