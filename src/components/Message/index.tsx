import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../../theme/style.css';

export type MessageType = 'info' | 'success' | 'warning' | 'error';

interface MessageProps {
  type?: MessageType;
  content: React.ReactNode;
  duration?: number;
  closable?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
  className?: string;
  onInnerClose?:()=>void;
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
  margin: 0 auto 16px auto
  padding: 12px 20px;
  border-radius: 8px;
  background: ${({ $type }) => getColorVars($type).bg};
  color: ${({ $type }) => getColorVars($type).color};
  border: ${({ $type }) => getColorVars($type).border};
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  align-items: flex-start;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  transition: all 0.2s;
  .message-close {
    position: absolute;
    right: 12px;
    top: 10px;
    cursor: pointer;
    color: #999;
    font-size: 16px;
    background: none;
    border: none;
    padding: 0;
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
  }, [duration, onClose,onInnerClose]);

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
export default Message;