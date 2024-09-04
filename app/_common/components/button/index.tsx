// components/Button.tsx
import React from 'react';
import { colors } from '../../../_utils/colors';

interface ButtonProps {
  title: string;
  className?: string;
  customStyles?: React.CSSProperties;
  [key: string]: any; // Allows any additional props
}

export const Button: React.FC<ButtonProps> = ({ title, className, customStyles = {}, ...props }) => {
  const defaultStyles: React.CSSProperties = {
    backgroundColor: colors.buttonColor,
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    width: '100%',
    ...customStyles
  };

  return (
    <button
      className={` ${className}` }
      style={defaultStyles}
      {...props}
    >
      {title}
    </button>
  );
};
