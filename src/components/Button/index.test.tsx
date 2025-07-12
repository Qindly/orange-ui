import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  test('renders button with correct text', () => {
    render(<Button>Hello Button</Button>);
    const buttonElement = screen.getByText(/Hello Button/i);
    expect(buttonElement).toBeInTheDocument();
  });
}); 