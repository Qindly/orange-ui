import React, { useState, createContext, useContext } from 'react';
import styled, { css } from 'styled-components';
import '../../theme/style.css';

export type RadioValue = string | number | boolean;

interface RadioProps {
  value: RadioValue;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (value: RadioValue, e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

interface RadioGroupProps {
  value?: RadioValue;
  defaultValue?: RadioValue;
  disabled?: boolean;
  onChange?: (value: RadioValue) => void;
  options?: Array<{ label: React.ReactNode; value: RadioValue; disabled?: boolean }>;
  children?: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  style?: React.CSSProperties;
  className?: string;
}

const RadioGroupContext = createContext<{
  value?: RadioValue;
  disabled?: boolean;
  onChange?: (value: RadioValue, e: React.ChangeEvent<HTMLInputElement>) => void;
} | null>(null);

const StyledRadio = styled.label<{ $checked: boolean; $disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  margin-right: 16px;
  font-size: 14px;
  user-select: none;

  .radio-input {
    display: none;
  }
  .radio-custom {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--color-primary, #1677ff);
    background: #fff;
    margin-right: 8px;
    box-sizing: border-box;
    position: relative;
    transition: border-color 0.2s;
    ${({ $checked }) =>
      $checked &&
      css`
        border-color: var(--color-primary, #1677ff);
      `}
    ${({ $disabled }) =>
      $disabled &&
      css`
        border-color: var(--color-default, #d9d9d9);
        background: var(--color-default-plain, #fafafa);
      `}
    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--color-primary, #1677ff);
      position: absolute;
      top: 2px;
      left: 2px;
      opacity: ${({ $checked }) => ($checked ? 1 : 0)};
      transition: opacity 0.2s;
    }
  }
`;

export const Radio = (props: RadioProps) => {
  const context = useContext(RadioGroupContext);
  const {
    value,
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onChange,
    children,
    style,
    className,
  } = props;

  const disabled = context?.disabled || disabledProp || false;
  const isChecked =
    context && context.value !== undefined
      ? context.value === value
      : checkedProp !== undefined
      ? checkedProp
      : defaultChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    context?.onChange?.(value, e);
    onChange?.(value, e);
  };

  return (
    <StyledRadio $checked={!!isChecked} $disabled={!!disabled} style={style} className={className}>
      <input
        className="radio-input"
        type="radio"
        value={String(value)}
        checked={!!isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className="radio-custom" />
      <span>{children}</span>
    </StyledRadio>
  );
};

const StyledRadioGroup = styled.div<{ $direction: 'horizontal' | 'vertical' }>`
  display: flex;
  flex-direction: ${({ $direction }) => ($direction === 'vertical' ? 'column' : 'row')};
`;

export const RadioGroup = (props: RadioGroupProps) => {
  const {
    value: valueProp,
    defaultValue,
    disabled,
    onChange,
    options,
    children,
    direction = 'horizontal',
    style,
    className,
  } = props;
  const [value, setValue] = useState<RadioValue | undefined>(defaultValue);
  const isControlled = valueProp !== undefined;
  const groupValue = isControlled ? valueProp : value;

  const handleChange = (val: RadioValue) => {
    if (!isControlled) setValue(val);
    onChange?.(val);
  };

  return (
    <RadioGroupContext.Provider
      value={{ value: groupValue, disabled, onChange: (val) => handleChange(val) }}
    >
      <StyledRadioGroup $direction={direction} style={style} className={className}>
        {options
          ? options.map((opt) => (
              <Radio
                key={String(opt.value)}
                value={opt.value}
                disabled={opt.disabled || disabled}
              >
                {opt.label}
              </Radio>
            ))
          : children}
      </StyledRadioGroup>
    </RadioGroupContext.Provider>
  );
};

Radio.Group = RadioGroup;

export default Radio;
