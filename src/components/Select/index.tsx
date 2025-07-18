import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import '../../theme/style.css';

export type SelectSize = 'small' | 'medium' | 'large';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | number | (string | number)[];
  onChange?: (value: string | number | (string | number)[]) => void;
  placeholder?: string;
  disabled?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  size?: SelectSize;
  error?: string;
  style?: React.CSSProperties;
  className?: string;
}


const getSizeVars = (size: SelectSize = 'medium') => {
  return {
    height: size === 'large' ? '40px' : size === 'medium' ? '32px' : '24px',
    fontSize: size === 'large' ? '16px' : size === 'medium' ? '14px' : '12px',
    padding: size === 'large' ? '0 12px' : size === 'medium' ? '0 11px' : '0 7px',
  };
};

const Wrapper = styled.div<{ $size: SelectSize; $error?: string; $disabled?: boolean }>`
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 300px;
  margin-top: 10px;
  margin-right: 8px;
  &:last-child { margin-right: 0; }
`;

const SelectBox = styled.div<{
  $size: SelectSize;
  $error?: string;
  $disabled?: boolean;
}>`
  width: 100%;
  height: ${({ $size }) => getSizeVars($size).height};
  font-size: ${({ $size }) => getSizeVars($size).fontSize};
  padding: ${({ $size }) => getSizeVars($size).padding};
  border: 1px solid ${({ $error }) => ($error ? '#ff4d4f' : '#d9d9d9')};
  border-radius: 6px;
  background-color: ${({ $disabled }) => ($disabled ? '#f5f5f5' : '#fff')};
  color: ${({ $disabled }) => ($disabled ? '#999' : '#333')};
  transition: all 0.2s;
  box-sizing: border-box;
  outline: none;
  display: flex;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  position: relative;
`;


const Placeholder = styled.span`
  color: #999;
`;

const Dropdown = styled.ul<{
  $size: SelectSize;
}>`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 10;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  margin: 4px 0 0 0;
  padding: 4px 0;
  max-height: 220px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  font-size: ${({ $size }) => getSizeVars($size).fontSize};
`;

const OptionItem = styled.li<{ $selected: boolean; $disabled?: boolean }>`
  padding: 6px 16px;
  color: ${({ $disabled }) => ($disabled ? '#ccc' : '#333')};
  background: ${({ $selected }) => ($selected ? 'var(--color-primary, #1677ff)' : '#fff')};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;
  margin: 2px 4px;
  transition: background 0.2s, color 0.2s;
  ${({ $selected }) => $selected && css`color: #fff;`}
  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#fff' : 'var(--color-primary-plain, #e6f4ff)')};
  }
`;

const Tag = styled.span`
  display: inline-block;
  background: var(--color-primary-plain, #e6f4ff);
  color: var(--color-primary, #1677ff);
  border-radius: 4px;
  padding: 0 6px;
  margin-right: 4px;
  font-size: 12px;
  line-height: 20px;
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
  line-height: 1.4;
`;

const SearchInput = styled.input<{
  $size: SelectSize;
}>`
  width: 100%;
  height: ${({ $size }) => getSizeVars($size).height};
  font-size: ${({ $size }) => getSizeVars($size).fontSize};
  padding: ${({ $size }) => getSizeVars($size).padding};
  border: none;
  outline: none;
  background: transparent;
  color: #333;
  margin-bottom: 4px;
`;

export const Select: React.FC<SelectProps> = (props) => {
  const {
    options,
    value,
    onChange,
    placeholder = '请选择',
    disabled = false,
    multiple = false,
    searchable = false,
    size = 'medium',
    error,
    style,
    className,
  } = props;

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  // 受控/非受控
  const isControlled = value !== undefined;
  const [innerValue, setInnerValue] = useState<string | number | (string | number)[] | undefined>(
    multiple ? [] : ''
  );
  const selectedValue = isControlled ? value : innerValue;

  // 过滤选项
  const filteredOptions = searchable && search
    ? options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()))
    : options;

  // 关闭下拉
  useEffect(() => {
    if (!open) setSearch('');
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);


  // 选中逻辑
  const handleSelect = (val: string | number, opt: SelectOption) => {
    if (opt.disabled) return;
    if (multiple) {
      let newValue = Array.isArray(selectedValue) ? [...selectedValue] : [];
      if (newValue.includes(val)) {
        newValue = newValue.filter(v => v !== val);
      } else {
        newValue.push(val);
      }
      if (!isControlled) setInnerValue(newValue);
      onChange?.(newValue);
    } else {
      if (!isControlled) setInnerValue(val);
      onChange?.(val);
      setOpen(false);
    }
  };

  // 渲染已选
  const renderSelected = () => {
    if (multiple && Array.isArray(selectedValue)) {
      if (!selectedValue.length) return <Placeholder>{placeholder}</Placeholder>;
      return selectedValue.map(val => {
        const opt = options.find(o => o.value === val);
        return opt ? <Tag key={val}>{opt.label}</Tag> : null;
      });
    } else {
      const opt = options.find(o => o.value === selectedValue);
      return opt ? <span>{opt.label}</span> : <Placeholder>{placeholder}</Placeholder>;
    }
  };

  return (
    <Wrapper
      $size={size}
      $error={error}
      $disabled={disabled}
      style={style}
      className={className}
      ref={ref}
    >
      <SelectBox
        $size={size}
        $error={error}
        $disabled={disabled}
        tabIndex={0}
        onClick={() => !disabled && setOpen(!open)}
      >
        {renderSelected()}
        <span style={{ marginLeft: 'auto', color: '#999', fontSize: 12 }}>
          ▼
        </span>
      </SelectBox>
      {open && !disabled && (
        <Dropdown $size={size}>
          {searchable && (
            <SearchInput
              $size={size}
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="搜索..."
              autoFocus
            />
          )}
          {filteredOptions.length ? (
            filteredOptions.map(opt => (
              <OptionItem
                key={opt.value}
                $selected={multiple ? Array.isArray(selectedValue) && selectedValue.includes(opt.value) : selectedValue === opt.value}
                $disabled={opt.disabled}
                onClick={() => handleSelect(opt.value, opt)}
              >
                {opt.label}
              </OptionItem>
            ))
          ) : (
            <OptionItem $selected={false} $disabled>
              无匹配选项
            </OptionItem>
          )}
        </Dropdown>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );

}
export default Select;