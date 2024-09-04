// components/Input.tsx
import React from 'react';
import { IconType } from 'react-icons';

interface InputProps {
  type: string;
  placeholder: string;
  className?: string;
  icon?: IconType;
  customStyles?: React.CSSProperties;
  [key: string]: any; // Allows any additional props
}

export const Input: React.FC<InputProps> = ({ type, placeholder, className, icon: Icon, customStyles = {}, ...props }) => {
  const defaultStyles: React.CSSProperties = {
    paddingLeft: Icon ? '2.5rem' : '1rem',
    padding: '0.5rem 1rem',
    borderColor: '#d1d5db', // Gray-300
    borderRadius: '0.25rem',
    ...customStyles
  };

  return (
    <div className="relative mb-4">
      {Icon && <Icon className='absolute z-10 top-2.5 left-2' color='#000' />}
      <input
        type={type}
        className={`placeholder:text-xs w-full border ${className}`}
        placeholder={placeholder}
        style={defaultStyles}
        {...props}
      />
    </div>
  );
};
