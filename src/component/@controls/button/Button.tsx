import React, { ButtonHTMLAttributes } from 'react';
import { buttonStyle } from './button.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'link';
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children }, ref) => {
    return (
      <button className={buttonStyle} ref={ref}>
        {children}
      </button>
    );
  }
);
