import React from 'react';
import styled, { css } from 'styled-components';
import '../../theme/style.css';
import { ButtonSize, ButtonRadius, ButtonVariant, ButtonAppearance } from '../../types/button';

interface ButtonProps {
  radius?: ButtonRadius;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  appearance?: ButtonAppearance;
}

const getColorVars = (variant: ButtonVariant = 'default', appearance: ButtonAppearance = 'solid') => {
  if (appearance === 'plain') {
    return {
      bg: `var(--color-${variant}-plain, #fff)`,
      color: `var(--color-${variant},#333)`,
      border: `1px solid var(--color-${variant},#d9d9d9)`,
    };
  } else {
    return {
      bg: `var(--color-${variant},#1677ff)`,
      color: `#fff`,
      border: `none`,
    }
  }
}

const getRadius = (radius: ButtonRadius = 'small') => {
  return `var(--radius-${radius},4px)`;
}

const StyledButton = styled.button<{
  $radius: ButtonRadius;
  $size: ButtonSize;
  $variant: ButtonVariant;
  $appearance: ButtonAppearance;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $variant, $appearance }) => getColorVars($variant, $appearance).bg};
  color: ${({ $variant, $appearance }) => getColorVars($variant, $appearance).color};
  border: ${({ $variant, $appearance }) => getColorVars($variant, $appearance).border};
  padding: 0 20px;
  min-width: 60px;
  min-height: ${({ $size }) => $size === 'large' ? '36px' : $size === 'medium' ? '28px' : '24px'};
  font-size: ${({ $size }) => $size === 'large' ? '16px' : $size === 'medium' ? '14px' : '12px'};
  border-radius: ${({ $radius }) => getRadius($radius)};
  transition: all 0.2s;
  box-sizing: border-box;

  &:hover:not(:disabled) {
    filter: brightness(0.95);
    opacity: 0.9;
  }
  ${({ $appearance }) => $appearance === 'plain' && css`
    background-clip: padding-box;
  `}
  ${({ $radius }) => $radius === 'circle' && css`
    padding: 0;
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
  `}
  &:disabled {
    background-color: #f5f5f5 !important;
    color: #bfbfbf !important;
    border: 1px solid #f0f0f0 !important;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const Button = (props: ButtonProps) => {
  const {
    radius = 'small',
    size = 'small',
    variant = 'default',
    appearance = 'solid',
    onClick,
    children,
    disabled,
  } = props;
  return <StyledButton $radius={radius} $size={size} $variant={variant} $appearance={appearance} onClick={onClick} disabled={disabled} >{children || 'Click me'}</StyledButton>;
};

export default Button;