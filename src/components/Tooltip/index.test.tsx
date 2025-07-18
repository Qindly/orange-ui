import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tooltip from './index';

describe('Tooltip', () => {
  it('渲染子元素', () => {
    render(
      <Tooltip title="提示内容">
        <button>按钮</button>
      </Tooltip>
    );
    expect(screen.getByText('按钮')).toBeInTheDocument();
  });

  it('悬停显示内容', () => {
    render(
      <Tooltip title="气泡内容">
        <button>悬停</button>
      </Tooltip>
    );
    fireEvent.mouseEnter(screen.getByText('悬停'));
    expect(screen.getByText('气泡内容')).toBeInTheDocument();
  });
});
