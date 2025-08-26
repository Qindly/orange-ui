import React from 'react';
import styled, { css } from 'styled-components';
import '../../theme/style.css';

export type CardSize = 'small' | 'medium' | 'large';
export type CardVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';

export interface CardProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode[];
  size?: CardSize;
  variant?: CardVariant;
  bordered?: boolean;
  hoverable?: boolean;
  loading?: boolean;
  cover?: React.ReactNode;
  extra?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  /**
   * 渐变背景：同 Button，支持预设/字符串/对象/数组
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
const getSizeVars = (size: CardSize = 'medium') => {
  return {
    padding: size === 'large' ? '24px' : size === 'medium' ? '16px' : '12px',
    fontSize: size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px',
    titleFontSize: size === 'large' ? '18px' : size === 'medium' ? '16px' : '14px',
  };
};

const getColorVars = (variant: CardVariant = 'default') => {
  return {
    border: `var(--color-${variant}, #d9d9d9)`,
    background: `var(--color-${variant}-plain, #fff)`,
    titleColor: `var(--color-${variant}, #333)`,
  };
};

const CardWrapper = styled.div<{
  $size: CardSize;
  $variant: CardVariant;
  $bordered: boolean;
  $hoverable: boolean;
  $clickable: boolean;
  $gradient?: string;
}>`
  background: ${({ $variant }) => getColorVars($variant).background};
  ${({ $gradient }) =>
    $gradient && $gradient !== 'none' && css`
      background-image: ${$gradient};
      color: #fff;
    `}
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
  box-sizing: border-box;
  margin-bottom:20px;
  font-size: ${({ $size }) => getSizeVars($size).fontSize};
  
  ${({ $bordered, $variant, $gradient }) =>
    $bordered &&
    css`
      border: ${$gradient && $gradient !== 'none' ? 'none' : `1px solid ${getColorVars($variant).border}`};
    `}
  
  ${({ $hoverable, $clickable }) =>
    ($hoverable || $clickable) &&
    css`
      cursor: ${$clickable ? 'pointer' : 'default'};
      &:hover {
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
        transform: translateY(-2px);
        filter: brightness(0.96);
      }
    `}
  
  ${({ $hoverable, $clickable }) =>
    !$hoverable &&
    !$clickable &&
    css`
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
    `}
`;
const CardCover = styled.div`
  position: relative;
  margin-top: -1px;
  margin-right: -1px;
  margin-left: -1px;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const CardHeader = styled.div<{
  $size: CardSize;
  $variant: CardVariant;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ $size }) => getSizeVars($size).padding};
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
`;

const CardTitle = styled.div<{
  $size: CardSize;
  $variant: CardVariant;
}>`
  font-size: ${({ $size }) => getSizeVars($size).titleFontSize};
  font-weight: 500;
  color: ${({ $variant }) => getColorVars($variant).titleColor};
  line-height: 1.4;
`;

const CardExtra = styled.div`
  color: #666;
  font-size: 14px;
`;

const CardBody = styled.div<{
  $size: CardSize;
}>`
  padding: ${({ $size }) => getSizeVars($size).padding};
  color: #333;
  line-height: 1.6;
`;

const CardActions = styled.div<{
  $size: CardSize;
}>`
  display: flex;
  align-items: center;
  padding: ${({ $size }) => getSizeVars($size).padding};
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
  
  > * {
    flex: 1;
    text-align: center;
    color: #666;
    transition: color 0.3s;
    
    &:hover {
      color: #333;
    }
    
    &:not(:last-child) {
      border-right: 1px solid #f0f0f0;
    }
  }
`;

export const Card: React.FC<CardProps> = (props) => {
  const {
    title,
    children,
    actions,
    size = 'medium',
    variant = 'default',
    bordered = true,
    hoverable = false,
    cover,
    extra,
    style,
    className,
    onClick,
    gradient = 'none',
  } = props;

  const isClickable = !!onClick;

  const getGradientCss = (value?: CardProps['gradient']) => {
    if (!value || value === 'none') return undefined;
    if (value === 'red') return 'linear-gradient(135deg, var(--color-red-1) 0%, var(--color-red-2) 100%)';
    if (value === 'blue') return 'linear-gradient(135deg, var(--color-blue-1) 0%, var(--color-blue-2) 100%)';
    if (value === 'green') return 'linear-gradient(135deg, var(--color-green-1) 0%, var(--color-green-2) 100%)';
    if (typeof value === 'object' && !Array.isArray(value)) {
      const angle = typeof value.angle === 'number' ? value.angle : 135;
      return `linear-gradient(${angle}deg, ${value.from} 0%, ${value.to} 100%)`;
    }
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
    return String(value);
  };

  return (
    <CardWrapper
      $size={size}
      $variant={variant}
      $bordered={bordered}
      $hoverable={hoverable}
      $clickable={isClickable}
      $gradient={getGradientCss(gradient)}
      style={style}
      className={className}
      onClick={onClick}
    >
      {cover && <CardCover>{cover}</CardCover>}
      {(title || extra) && (
        <CardHeader $size={size} $variant={variant}>
          {title && <CardTitle $size={size} $variant={variant}>{title}</CardTitle>}
          {extra && <CardExtra>{extra}</CardExtra>}
        </CardHeader>
      )}
      <CardBody $size={size}>{children}</CardBody>
      {actions && actions.length > 0 && (
        <CardActions $size={size}>
          {actions.map((action, index) => (
            <div key={index}>{action}</div>
          ))}
        </CardActions>
      )}
    </CardWrapper>
  );
};

export default Card; 