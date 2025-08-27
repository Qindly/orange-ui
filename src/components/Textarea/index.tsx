import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
// import { InputSize, InputVariant } from '../../types/input';

export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: InputSize;
  variant?: InputVariant;
  error?: string;
  clearable?: boolean;
  showCount?: boolean;
  maxLength?: number;
  onClear?: () => void;
  autoSize?: boolean;
  minRows?: number;
  maxRows?: number;
}

const getColorVars = (variant: InputVariant = 'default') => {
  return {
    border: `var(--color-${variant}, #d9d9d9)`,
    focusBorder: `var(--color-${variant}-focus, #1677ff)`,
    errorBorder: `var(--color-${variant}-error, #ff4d4f)`,
  };
};

const getSizeVars = (size: InputSize = 'medium') => {
  return {
    height: size === 'large' ? '40px' : size === 'medium' ? '32px' : '24px',
    fontSize: size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px',
    padding:
      size === 'large' ? '0 12px' : size === 'medium' ? '0 11px' : '0 7px',
  };
};

const TextareaWrapper = styled.div<{
  $size: InputSize;
  $variant: InputVariant;
  $error?: string;
  $disabled?: boolean;
}>`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledTextarea = styled.textarea<{
  $size: InputSize;
  $variant: InputVariant;
  $error?: string;
  $disabled?: boolean;
  $showCount?: boolean;
  $autoSize?: boolean;
}>`
  width: 100%;
  min-height: ${({ $size }) => getSizeVars($size).height};
  font-size: ${({ $size }) => getSizeVars($size).fontSize};
  padding: ${({ $size }) => getSizeVars($size).padding};
  border: 1px solid
    ${({ $variant, $error }) =>
      $error
        ? getColorVars($variant).errorBorder
        : getColorVars($variant).border};
  border-radius: 6px;
  background-color: #fff;
  color: #333;
  transition: all 0.2s;
  box-sizing: border-box;
  outline: none;
  resize: ${({ $autoSize }) => ($autoSize ? 'none' : 'vertical')};
  font-family: inherit;
  line-height: 1.5;

  &:focus {
    border-color: ${({ $variant, $error }) =>
      $error
        ? getColorVars($variant).errorBorder
        : getColorVars($variant).focusBorder};
    box-shadow: 0 0 0 2px
      ${({ $error }) =>
        $error ? 'rgba(255, 77, 79, 0.2)' : 'rgba(22, 119, 255, 0.2)'};
  }

  &:disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
    border-color: #d9d9d9;
  }

  &::placeholder {
    color: #999;
  }

  ${({ $showCount }) =>
    $showCount &&
    css`
      padding-right: 60px;
    `}
`;

const ClearButton = styled.button<{ $size: InputSize }>`
  position: absolute;
  right: 8px;
  top: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  font-size: 14px;
  padding: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: #f0f0f0;
    color: #666;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
  line-height: 1.4;
`;

const CountDisplay = styled.div<{ $size: InputSize }>`
  position: absolute;
  right: 8px;
  bottom: 8px;
  font-size: 12px;
  color: #999;
  pointer-events: none;
`;

export const Textarea = (props: TextareaProps) => {
  const {
    size = 'medium',
    variant = 'default',
    error,
    clearable = false,
    maxLength,
    showCount = false,
    disabled = false,
    value,
    onChange,
    onClear,
    autoSize = false,
    minRows = 3,
    maxRows = 1000,
    rows = 3,
    ...restProps
  } = props;

  // 判断是否为受控组件
  const isControlled = value !== undefined;

  // 只在非受控模式下使用内部状态
  const [textareaValue, setTextareaValue] = useState(value || '');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    // 如果是非受控组件，更新内部状态
    if (!isControlled) {
      setTextareaValue(newValue);
    }

    // 调用父组件的onChange回调
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) {
      setTextareaValue('');
    }
    onClear?.();
  };

  // 自适应高度功能
  useEffect(() => {
    if (autoSize && textareaRef.current) {
      const textareaElement = textareaRef.current;
      textareaElement.style.height = 'auto';

      const lineHeight =
        parseInt(getComputedStyle(textareaElement).lineHeight) || 20;
      const minHeight = minRows * lineHeight;
      const maxHeight = maxRows * lineHeight;

      const scrollHeight = textareaElement.scrollHeight;
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);

      textareaElement.style.height = `${newHeight}px`;
    }
  }, [value, textareaValue, autoSize, minRows, maxRows]);

  // 受控组件使用传入的value，非受控组件使用内部状态
  const displayValue = isControlled ? value : textareaValue;
  const currentLength = String(displayValue).length;

  return (
    <TextareaWrapper
      $size={size}
      $variant={variant}
      $error={error}
      $disabled={disabled}
    >
      <StyledTextarea
        ref={textareaRef}
        value={displayValue}
        onChange={handleChange}
        disabled={disabled}
        maxLength={maxLength}
        rows={rows}
        $size={size}
        $variant={variant}
        $error={error}
        $disabled={disabled}
        $showCount={showCount}
        $autoSize={autoSize}
        {...restProps}
      />

      {clearable && displayValue && !disabled && (
        <ClearButton $size={size} onClick={handleClear} type="button">
          ✕
        </ClearButton>
      )}

      {showCount && (
        <CountDisplay $size={size}>
          {maxLength ? `${currentLength}/${maxLength}` : currentLength}
        </CountDisplay>
      )}

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </TextareaWrapper>
  );
};

export default Textarea;
