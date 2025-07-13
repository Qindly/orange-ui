import React from 'react';
import { InputSize, InputType, InputVariant } from '../../types/input';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  variant?: InputVariant;
  type?: InputType;
  error?: string;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref?: React.Ref<HTMLInputElement>;
}

const Input = () => {
  return <input type="text" />;
};
export default Input;
