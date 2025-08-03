import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../theme/style.css';
import { showMessage } from './MessageContainer';

export type MessageType = 'info' | 'success' | 'warning' | 'error';

interface MessageProps {
  type?: MessageType;
  content: React.ReactNode;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
  className?: string;
  onInnerClose?: () => void;
}
const getColorVars = (type: MessageType = 'info') => {
  switch (type) {
    case 'success':
      return {
        bg: 'var(--color-success-plain, #f6ffed)',
        color: 'var(--color-success, #52c41a)',
        border: '1px solid var(--color-success, #52c41a)',
      };
    case 'error':
      return {
        bg: 'var(--color-danger-plain, #fff1f0)',
        color: 'var(--color-danger, #ff4d4f)',
        border: '1px solid var(--color-danger, #ff4d4f)',
      };
    case 'warning':
      return {
        bg: 'var(--color-warning-plain, #fffbe6)',
        color: 'var(--color-warning, #faad14)',
        border: '1px solid var(--color-warning, #faad14)',
      };
    case 'info':
    default:
      return {
        bg: '#fff',
        color: '#222',
        border: '1px solid #222',
      };
  }
};

const StyledMessage = styled.div<{
  $type: MessageType;
}>`
  min-width: 240px;
  max-width: 420px;
  margin: 0 auto 16px auto;
  padding: 14px 24px 14px 20px;
  border-radius: 10px;
  background: ${({ $type }) => getColorVars($type).bg};
  color: ${({ $type }) => getColorVars($type).color};
  border: ${({ $type }) => getColorVars($type).border};
  box-shadow: 0 4px 16px rgba(0,0,0,0.10);
  display: flex;
  align-items: center;
  position: relative;
  font-size: 15px;
  line-height: 1.7;
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
  opacity: 1;
  animation: fadeIn 0.3s;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .message-close {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: #999;
    font-size: 18px;
    background: none;
    border: none;
    padding: 0;
    transition: color 0.2s;
    &:hover {
      color: #333;
    }
  }
`;

export const Message = (props: MessageProps) => {
  const {
    type = 'info',
    content,
    duration = 3,
    closable = false,
    onClose,
    style,
    className,
    onInnerClose,
  } = props;

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
        onInnerClose?.();
      }, duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose, onInnerClose]);

  if (!visible) return null;

  return (
    <StyledMessage $type={type} style={style} className={className}>
      <span>{content}</span>
      {closable && (
        <button type="button"
          className="message-close"
          aria-label="关闭"
          onClick={() => {
            setVisible(false);
            onClose?.();
            onInnerClose?.();
          }}
        >
          ×
        </button>
      )}
    </StyledMessage>
  );
};

const MessageApi = {
  info(content: React.ReactNode, duration?: number, closable?: boolean, onClose?: () => void) {
    showMessage({ type: 'info', content, duration, closable, onClose });
  },
  success(content: React.ReactNode, duration?: number, closable?: boolean, onClose?: () => void) {
    showMessage({ type: 'success', content, duration, closable, onClose });
  },
  warning(content: React.ReactNode, duration?: number, closable?: boolean, onClose?: () => void) {
    showMessage({ type: 'warning', content, duration, closable, onClose });
  },
  error(content: React.ReactNode, duration?: number, closable?: boolean, onClose?: () => void) {
    showMessage({ type: 'error', content, duration, closable, onClose });
  },
};

export default Message;
export { MessageApi };