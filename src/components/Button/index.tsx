import React from 'react';
import styled, { css } from 'styled-components';
import '../../theme/style.css';
import {
  ButtonAppearance,
  ButtonRadius,
  ButtonSize,
  ButtonVariant,
} from '../../types/button';

interface ButtonProps {
  radius?: ButtonRadius;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  appearance?: ButtonAppearance;
  icon?: React.ReactNode;
  loading?: boolean;
}

const getColorVars = (
  variant: ButtonVariant = 'default',
  appearance: ButtonAppearance = 'solid',
) => {
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
    };
  }
};

const getRadius = (radius: ButtonRadius = 'small') => {
  return `var(--radius-${radius},4px)`;
};

const StyledButton = styled.button<{
  $radius: ButtonRadius;
  $size: ButtonSize;
  $variant: ButtonVariant;
  $appearance: ButtonAppearance;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $variant, $appearance }) =>
    getColorVars($variant, $appearance).bg};
  color: ${({ $variant, $appearance }) =>
    getColorVars($variant, $appearance).color};
  border: ${({ $variant, $appearance }) =>
    getColorVars($variant, $appearance).border};
  padding: 0 20px;
  min-width: 60px;
  min-height: ${({ $size }) =>
    $size === 'large' ? '36px' : $size === 'medium' ? '28px' : '24px'};
  font-size: ${({ $size }) =>
    $size === 'large' ? '16px' : $size === 'medium' ? '14px' : '12px'};
  border-radius: ${({ $radius }) => getRadius($radius)};
  transition: all 0.2s;
  box-sizing: border-box;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.95);
    opacity: 0.9;
  }
  ${({ $appearance }) =>
    $appearance === 'plain' &&
    css`
      background-clip: padding-box;
    `}
  ${({ $radius }) =>
    $radius === 'circle' &&
    css`
      padding: 0;
      width: 36px;
      height: 36px;
      min-width: 36px;
      min-height: 36px;
    `}
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  .btn-icon {
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
    font-size: 1.1em;
  }
  .btn-icon-loading {
    display: inline-flex;
    margin-right: 6px;
    animation: btn-spin 1s linear infinite;
  }
  @keyframes btn-spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingIcon = () => (
  <span className="btn-icon-loading">
    <svg width="1em" height="1em" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#999"
        strokeWidth="4"
        strokeDasharray="31.4 31.4"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </span>
);

export const Button = (props: ButtonProps) => {
  const {
    radius = 'small',
    size = 'small',
    variant = 'default',
    appearance = 'solid',
    onClick,
    children,
    disabled,
    icon,
    loading = false,
  } = props;

  const renderContent = () => {
    if (loading) {
      return (
        <>
          <LoadingIcon />
          <span>{children}</span>
        </>
      );
    } else {
      return (
        <>
          {icon && <span className="btn-icon">{icon}</span>}
          <span>{children}</span>
        </>
      );
    }
  };

  return (
    <StyledButton
      $radius={radius}
      $size={size}
      $variant={variant}
      $appearance={appearance}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {renderContent()}
    </StyledButton>
  );
};

export default Button;
