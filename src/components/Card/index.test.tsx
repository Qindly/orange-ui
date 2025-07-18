import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  it('渲染标题和内容', () => {
    render(<Card title="测试标题">内容</Card>);
    expect(screen.getByText('测试标题')).toBeInTheDocument();
    expect(screen.getByText('内容')).toBeInTheDocument();
  });

  it('渲染extra和actions', () => {
    render(
      <Card title="标题" extra={<span>额外</span>} actions={[<span key="a">操作</span>]}>内容</Card>
    );
    expect(screen.getByText('额外')).toBeInTheDocument();
    expect(screen.getByText('操作')).toBeInTheDocument();
  });

  it('点击事件', () => {
    const onClick = jest.fn();
    render(<Card title="点击卡片" onClick={onClick}>内容</Card>);
    fireEvent.click(screen.getByText('点击卡片'));
    expect(onClick).toHaveBeenCalled();
  });
});
