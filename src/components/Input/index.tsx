import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  variant?: InputVariant;
  type?: InputType;
  error?: string;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  clearable?: boolean;
  showPassword?: boolean;
  showCount?: boolean;
  maxLength?: number;
  onClear?: () => void;
}

export type InputSize = 'small' | 'medium' | 'large';
export type InputType =
  | 'text'
  | 'password'
  | 'number'
  | 'email'
  | 'tel'
  | 'url'
  | 'search';
export type InputVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';


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

const InputWrapper = styled.div<{
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

const StyledInput = styled.input<{
  $size: InputSize;
  $variant: InputVariant;
  $error?: string;
  $disabled?: boolean;
  $showCount?: boolean;
}>`
  width: 100%;
  height: ${({ $size }) => getSizeVars($size).height};
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
  top: 50%;
  transform: translateY(-50%);
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

const PasswordToggle = styled.button<{ $size: InputSize }>`
  position: absolute;
  right: ${({ $size }) =>
    $size === 'large' ? '12px' : $size === 'medium' ? '11px' : '7px'};
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  font-size: 14px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
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
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #999;
  pointer-events: none;
`;

export const Input = (props: InputProps) => {
  const {
    size = 'medium',
    variant = 'default',
    type = 'text',
    error,
    clearable = false,
    showPassword = false,
    maxLength,
    showCount = false,
    disabled = false,
    value,
    onChange,
    onPressEnter,
    onClear,
    ...restProps
  } = props;

  // 判断是否为受控组件
  const isControlled = value !== undefined;

  // 只在非受控模式下使用内部状态
  const [inputValue, setInputValue] = useState(value || '');
  const [showPasswordText, setShowPasswordText] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // 如果是非受控组件，更新内部状态
    if (!isControlled) {
      setInputValue(newValue);
    }

    // 调用父组件的onChange回调
    onChange?.(e);
  };

  const handleClear = () => {
    if (!isControlled) {
      setInputValue('');
    }
    onClear?.();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter?.(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPasswordText(!showPasswordText);
  };

  const currentType =
    showPassword && type === 'password'
      ? showPasswordText
        ? 'text'
        : 'password'
      : type;

  // 受控组件使用传入的value，非受控组件使用内部状态
  const displayValue = isControlled ? value : inputValue;
  const currentLength = String(displayValue).length;

  return (
    <InputWrapper
      $size={size}
      $variant={variant}
      $error={error}
      $disabled={disabled}
    >
      <StyledInput
        type={currentType}
        value={displayValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        maxLength={maxLength}
        $size={size}
        $variant={variant}
        $error={error}
        $disabled={disabled}
        $showCount={showCount}
        {...restProps}
      />

      {clearable && displayValue && !disabled && (
        <ClearButton $size={size} onClick={handleClear} type="button">
          ✕
        </ClearButton>
      )}
      {showPassword && type === 'password' && (
        <PasswordToggle
          $size={size}
          onClick={togglePasswordVisibility}
          type="button"
        >
          {showPasswordText ? '👁️' : '👁️‍🗨️'}
        </PasswordToggle>
      )}

      {showCount && (
        <CountDisplay $size={size}>
          {maxLength ? `${currentLength}/${maxLength}` : currentLength}
        </CountDisplay>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default Input;
