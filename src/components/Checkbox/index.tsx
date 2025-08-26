import React, { useState, createContext, useContext } from 'react';
import styled, { css } from 'styled-components';
import '../../theme/style.css';

export type CheckboxValue = string | number | boolean;

interface CheckboxProps {
  value?: CheckboxValue;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

interface CheckboxGroupProps {
  value?: CheckboxValue[];
  defaultValue?: CheckboxValue[];
  disabled?: boolean;
  options?: Array<{ label: React.ReactNode; value: CheckboxValue; disabled?: boolean }>;
  onChange?: (checkedList: CheckboxValue[]) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

const CheckboxGroupContext = createContext<{
  value?: CheckboxValue[];
  disabled?: boolean;
  onChange?: (val: CheckboxValue, checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
} | null>(null);

const StyledCheckbox = styled.label<{ $checked: boolean; $disabled: boolean; $indeterminate: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  margin-right: 16px;
  margin-bottom: 4px;
  font-size: 14px;
  user-select: none;

  .checkbox-input {
    display: none;
  }

  .checkbox-custom {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 2px solid var(--color-primary, #1677ff);
    background: #fff;
    margin-right: 8px;
    box-sizing: border-box;
    position: relative;
    transition: border-color 0.2s, background 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ $checked }) =>
    $checked &&
    css`
        background: var(--color-primary, #1677ff);
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
      display: ${({ $checked, $indeterminate }) =>
    $checked || $indeterminate ? 'block' : 'none'};
      width: 10px;
      height: 2px;
      background: #fff;
      position: absolute;
      top: 6px;
      left: 2px;
      border-radius: 1px;
      transition: all 0.2s;
      ${({ $indeterminate }) =>
    $indeterminate &&
    css`
          width: 8px;
          height: 2px;
          left: 3px;
          top: 7px;
        `}
      ${({ $checked, $indeterminate }) =>
    $checked &&
    !$indeterminate &&
    css`
          width: 6px;
          height: 6px;
          border-left: 2px solid #fff;
          border-bottom: 2px solid #fff;
          background: none;
          left: 2px;
          top: 2px;
          transform: rotate(-45deg);
        `}
    }
  }
`;

export const Checkbox = (props: CheckboxProps) => {
  const context = useContext(CheckboxGroupContext);
  const {
    value,
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    indeterminate = false,
    onChange,
    children,
    style,
    className,
  } = props;

  const disabled = context?.disabled || false;
  const isChecked = context && value !== undefined
    ? context.value?.includes(value)
    : checkedProp !== undefined
      ? checkedProp
      : defaultChecked;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const checked = e.target.checked;
    context?.onChange?.(value!, checked, e);
    onChange?.(checked, e);
  };

  return (
    <StyledCheckbox $checked={!!isChecked} $disabled={!!disabled} $indeterminate={!!indeterminate} style={style} className={className}>
      <input
        className="checkbox-input"
        type="checkbox"
        checked={!!isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className="checkbox-custom" />
      <span>{children}</span>
    </StyledCheckbox>
  );
}

const StyledCheckboxGroup = styled.div <{ $direction: 'horizontal' | 'vertical' }>`
display:flex;
flex-direction: ${({ $direction }) => ($direction === 'vertical' ? 'column' : 'row')};
`;




export const CheckboxGroup = (props: CheckboxGroupProps) => {
  const {
    value: valueProp,
    defaultValue,
    disabled,
    options,
    onChange,
    children,
    style,
    className,
    direction = 'horizontal',
  } = props;
  const [checkedList, setCheckedList] = useState<CheckboxValue[]>(defaultValue || []);
  const isControlled = valueProp !== undefined;
  const groupValue = isControlled ? valueProp : checkedList;

  const handleChange = (val: CheckboxValue, checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
    let newList = groupValue.slice();
    if (checked) {
      if (!newList.includes(val)) newList.push(val);
    } else {
      newList = newList.filter((item) => item !== val);
    }
    if (!isControlled) setCheckedList(newList);
    onChange?.(newList);
  }
  return (
    <CheckboxGroupContext.Provider value={{ value: groupValue, disabled, onChange: handleChange }}>
      <StyledCheckboxGroup $direction={direction} style={style} className={className}>
        {options
          ? options.map((opt) => (
            <Checkbox
              key={String(opt.value)}
              value={opt.value}
              disabled={opt.disabled || disabled}
            >
              {opt.label}
            </Checkbox>
          ))
          : children}
      </StyledCheckboxGroup>
    </CheckboxGroupContext.Provider>
  );

};
Checkbox.Group = CheckboxGroup;
export default Checkbox;



