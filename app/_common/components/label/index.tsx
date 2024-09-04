// components/Label.tsx
import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  customStyles?: React.CSSProperties;
  [key: string]: any; // Allows any additional props
}

export const Label: React.FC<LabelProps> = ({ children, className, customStyles = {}, ...props }) => {
  const defaultStyles: React.CSSProperties = {
    marginBottom: '0.5rem',
    fontSize: '0.875rem', // 14px
    fontWeight: '500', // medium
    color: '#6b7280', // Gray-500
    ...customStyles
  };

  return (
    <label className={`block ${className}`} style={defaultStyles} {...props}>
      {children}
    </label>
  );
};
