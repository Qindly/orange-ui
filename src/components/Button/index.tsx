import React from 'react';
import styled, { css } from 'styled-components';
import '../../theme/style.css';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonRadius = 'small' | 'medium' | 'large' | 'round' | 'circle';
export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info';
export type ButtonAppearance = 'solid' | 'plain';

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
  effect?: 'none' | 'pop'; 
  /**
   * 渐变背景：
   * - 预设：'none' | 'red' | 'blue' | 'green'
   * - 字符串：任何 CSS 渐变，如 'linear-gradient(...)'
   * - 对象：{ from, to, angle? } 自动生成线性渐变
   * - 数组：['#111', '#333', '#555'] 多段线性渐变
   */
  gradient?:
    | 'none'
    | 'red'
    | 'blue'
    | 'green'
    | string
    | { from: string; to: string; angle?: number }
    | string[];
}

const getColorVars = (
  variant: ButtonVariant = 'default',
  appearance: ButtonAppearance = 'solid',
) => {
  if (appearance === 'plain' && variant !== 'default') {
    return {
      bg: `var(--color-${variant}-plain, #fff)`,
      color: `var(--color-${variant},#333)`,
      border: `1px solid var(--color-${variant},#d9d9d9)`,
    };
  } else if (variant !== 'default') {
    return {
      bg: `var(--color-${variant},#1677ff)`,
      color: `#fff`,
      border: `none`,
    };
  } else {
    return {
      bg: '#fff',
      color: '#222',
      border: '1px solid #222',
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
  $effect: 'none' | 'pop';
  $gradient?: string;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $variant, $appearance }) =>
    getColorVars($variant, $appearance).bg};
  ${({ $gradient }) =>
    $gradient && $gradient !== 'none' && css`
      background-image: ${typeof $gradient === 'string' ? $gradient : 'none'};
      color: #fff;
      border: none;
      &:hover:not(:disabled) {
        filter: brightness(0.92);
        opacity: 1;
      }
      &:active:not(:disabled) {
        filter: brightness(0.88);
      }
    `}
  color: ${({ $variant, $appearance, $gradient }) =>
    $gradient && $gradient !== 'none'
      ? '#fff'
      : getColorVars($variant, $appearance).color};
  border: ${({ $variant, $appearance, $gradient }) =>
    $gradient && $gradient !== 'none'
      ? 'none'
      : getColorVars($variant, $appearance).border};
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
  will-change: transform, filter, box-shadow;

  &:last-child {
    margin-right: 0;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.98);
    opacity: 0.96;
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
  ${({ $effect }) =>
    $effect === 'pop' &&
    css`
      &:hover:not(:disabled) {
        transform: translateY(-1px) scale(1.03);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }
      &:active:not(:disabled) {
        transform: translateY(0) scale(0.99);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
      }
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
    effect = 'none',
    gradient = 'none',
  } = props;

  const getGradientCss = (value?: ButtonProps['gradient']) => {
    if (!value || value === 'none') return undefined;
    if (value === 'red') {
      return 'linear-gradient(135deg, var(--color-red-2) 0%, var(--color-red-4) 100%)';
    } 
    if (value === 'blue') {
      return 'linear-gradient(135deg, var(--color-blue-2) 0%, var(--color-blue-4) 100%)';
    }
    if (value === 'green') {
      return 'linear-gradient(135deg, var(--color-green-2) 0%, var(--color-green-4) 100%)';
    }
    // 对象形式 { from, to, angle }
    if (typeof value === 'object' && !Array.isArray(value)) {
      const angle = typeof value.angle === 'number' ? value.angle : 135;
      return `linear-gradient(${angle}deg, ${value.from} 0%, ${value.to} 100%)`;
    }
    // 数组形式 [c1, c2, c3...]
    if (Array.isArray(value)) {
      const stops = value
        .filter(Boolean)
        .map((c, idx, arr) => {
          const pct = Math.round((idx / Math.max(1, arr.length - 1)) * 100);
          return `${c} ${pct}%`;
        })
        .join(', ');
      return `linear-gradient(135deg, ${stops})`;
    }
    // 字符串形式（直接传入 linear-gradient(...) 或单色）
    return String(value);
  };

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
      $effect={effect}
      $gradient={getGradientCss(gradient)}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {renderContent()}
    </StyledButton>
  );
};

export default Button;
