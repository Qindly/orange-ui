import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  title: React.ReactNode;
  placement?: TooltipPlacement;
  children: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const TooltipWrapper = styled.span`
  position: relative;
  display: inline-block;
`;

const TooltipBubble = styled.div<{
  $placement: TooltipPlacement;
  $visible: boolean;
}>`
  position: absolute;
  z-index: 999;
  min-width: 60px;
  max-width: 240px;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  font-size: 13px;
  border-radius: 4px;
  white-space: pre-line;
  pointer-events: none;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);

  ${({ $placement }) =>
    $placement === 'top' &&
    css`
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%) translateY(-8px);
      margin-bottom: 8px;
    `}
  ${({ $placement }) =>
    $placement === 'bottom' &&
    css`
      left: 50%;
      top: 100%;
      transform: translateX(-50%) translateY(8px);
      margin-top: 8px;
    `}
  ${({ $placement }) =>
    $placement === 'left' &&
    css`
      right: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(-8px);
      margin-right: 8px;
    `}
  ${({ $placement }) =>
    $placement === 'right' &&
    css`
      left: 100%;
      top: 50%;
      transform: translateY(-50%) translateX(8px);
      margin-left: 8px;
    `}
`;

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  placement = 'top',
  children,
  disabled = false,
  style,
  className,
}) => {
  const [visible, setVisible] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  const show = () => {
    if (disabled) return;
    timer.current && clearTimeout(timer.current);
    setVisible(true);
  }

  const hide = () => {
    timer.current && clearTimeout(timer.current);
    timer.current = setTimeout(() => setVisible(false), 100);
  }

  return (<TooltipWrapper
    style={style}
    className={className}
    onMouseEnter={show}
    onMouseLeave={hide}
    onFocus={show}
    onBlur={hide}
    tabIndex={0}
  >
    {children}
    <TooltipBubble $placement={placement} $visible={visible}>
      {title}
    </TooltipBubble>
  </TooltipWrapper>
  )

}
export default Tooltip;