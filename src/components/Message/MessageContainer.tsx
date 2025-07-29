import React, { useState, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Message, { MessageType } from './index';

export interface MessageConfig {
  type?: MessageType;
  content: React.ReactNode;
  duration?: number;
  closable?: boolean;
}

let addMessage: (msg: MessageConfig) => void;

const MESSAGE_CONTAINER_ID = '__orange_ui_message_container__';

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

function ensureContainer() {
  let container = document.getElementById(MESSAGE_CONTAINER_ID);
  if (!container) {
    container = document.createElement('div');
    container.id = MESSAGE_CONTAINER_ID;
    document.body.appendChild(container);
  }
  return container;
}

// Portal 挂载逻辑
function renderPortal() {
  const container = ensureContainer();
  ReactDOM.render(<MessageContainer />, container);
}

if (typeof window !== 'undefined') {
  renderPortal();
}

export function showMessage(config: MessageConfig) {
  addMessage(config);
} 