import React from 'react';
import classNames from 'classnames';
import './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button className={classNames('button', className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
