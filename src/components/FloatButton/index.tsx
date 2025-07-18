import React from 'react';
import styled, { css } from 'styled-components';
import '../../theme/style.css';
import {
  FloatButtonShape,
  FloatButtonSize,
  FloatButtonVariant,
  FloatButtonPosition,
} from '../../types/floatButton';

interface FloatButtonProps {
  shape?: FloatButtonShape;
  size?: FloatButtonSize;
  variant?: FloatButtonVariant;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  position?: FloatButtonPosition;
}

const getColorVars = (variant: FloatButtonVariant = 'default') => {
  return {
    bg: `var(--color-${variant},#1677ff)`,
    color: `#fff`,
  };
};

const getSize = (size: FloatButtonSize = 'large') => {
  return size === 'large' ? '48px' : '40px';
};

const StyledFloatButton = styled.button<{
  $shape: FloatButtonShape;
  $size: FloatButtonSize;
  $variant: FloatButtonVariant;
  $position: FloatButtonPosition;
}>`
  position: fixed;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $variant }) => getColorVars($variant).bg};
  color: ${({ $variant }) => getColorVars($variant).color};
  border: none;
  width: ${({ $size }) => getSize($size)};
  height: ${({ $size }) => getSize($size)};
  font-size: ${({ $size }) => ($size === 'large' ? '24px' : '20px')};
  border-radius: ${({ $shape }) => ($shape === 'circle' ? '50%' : '6px')};
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  z-index: 1000;

  ${({ $position }) => css`
    ${$position.top !== undefined ? `top: ${$position.top}px;` : ''}
    ${$position.right !== undefined ? `right: ${$position.right}px;` : ''}
    ${$position.bottom !== undefined ? `bottom: ${$position.bottom}px;` : ''}
    ${$position.left !== undefined ? `left: ${$position.left}px;` : ''}
  `}

  &:hover:not(:disabled) {
    filter: brightness(0.95);
    opacity: 0.9;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  .float-button-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .float-button-description {
    display: none;
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 8px;
    padding: 6px 12px;
    background-color: rgba(0, 0, 0, 0.85);
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    white-space: nowrap;
  }

  &:hover .float-button-description {
    display: block;
  }
`;

export const FloatButton = (props: FloatButtonProps) => {
  const {
    shape = 'circle',
    size = 'large',
    variant = 'default',
    onClick,
    disabled,
    icon,
    description,
    position = { bottom: 24, right: 24 },
  } = props;

  return (
    <StyledFloatButton
      $shape={shape}
      $size={size}
      $variant={variant}
      $position={position}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="float-button-icon">{icon}</span>
      {description && (
        <span className="float-button-description">{description}</span>
      )}
    </StyledFloatButton>
  );
};

export default FloatButton;
