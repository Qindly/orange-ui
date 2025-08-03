import React, { useState, useCallback, useEffect } from 'react';
import { createRoot, Root } from 'react-dom/client';
import ReactDOM from 'react-dom';
import Message, { MessageType } from './index';

export interface MessageConfig {
  type?: MessageType;
  content: React.ReactNode;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
}

interface MessageInstance extends MessageConfig {
  id: number;
}

const MESSAGE_CONTAINER_ID = '__orange_ui_message_container__';

let messages: MessageInstance[] = [];
let root: Root | null = null;


const renderMessages = () => {
  let container = document.getElementById(MESSAGE_CONTAINER_ID);
  if (!container) {
    {
      container = document.createElement('div');
      container.id = MESSAGE_CONTAINER_ID;
      document.body.appendChild(container);
    }
  }

  if (!root) {
    root = createRoot(container);
  }

  root.render(<MessageContainer messages={messages} />)
};

export function showMessage(config: MessageConfig) {
  const id = Date.now() + Math.random();
  messages = [...messages, { ...config, id }];
  renderMessages();
}

function removeMessage(id: number) {
  const currentMessage = messages.find(msg => msg.id == id);
  if (currentMessage && currentMessage.onClose) {
    currentMessage.onClose();
  }
  messages = messages.filter(msg => msg.id != id);
  if (messages.length === 0 && root) {
    root.unmount();
    const container = document.getElementById(MESSAGE_CONTAINER_ID);
    if (container) {
      document.body.removeChild(container);
    }
    root = null;
  } else {
    renderMessages();
  }
}
const MessageContainer: React.FC<{ messages: MessageInstance[] }> = ({ messages }) => {
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
      {messages.map((msg) => (
        <div key={msg.id} style={{ pointerEvents: 'auto' }}>
          <Message {...msg} onInnerClose={() => removeMessage(msg.id)} />
        </div>
      ))}
    </div>
  )
}
