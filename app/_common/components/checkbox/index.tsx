// components/Checkbox.tsx
import React from 'react';

interface CheckboxProps {
  label: string;
  className?: string;
  customStyles?: React.CSSProperties;
  [key: string]: any; // Allows any additional props
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className, customStyles = {}, ...props }) => {
  const defaultStyles: React.CSSProperties = {
    fontSize: '0.875rem', // 14px
    color: '#6b7280', // Gray-500
    ...customStyles
  };

  return (
    <label className={`flex items-center ${className}`} style={defaultStyles}>
      <input type="checkbox" className="mr-2" {...props} />
      {label}
    </label>
  );
};
