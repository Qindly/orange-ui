import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './index';

describe('Input', () => {
  it('渲染输入框和placeholder', () => {
    render(<Input placeholder="请输入内容" />);
    expect(screen.getByPlaceholderText('请输入内容')).toBeInTheDocument();
  });

  it('onChange事件', () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'abc' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('支持disabled', () => {
    render(<Input disabled placeholder="禁用" />);
    expect(screen.getByPlaceholderText('禁用')).toBeDisabled();
  });
});
