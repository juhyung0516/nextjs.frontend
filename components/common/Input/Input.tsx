import React from 'react';
import classNames from 'classnames';
import './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, className, ...rest }) => {
  return (
    <div className={classNames('input-wrapper', className)}>
      {label && <label className="input-label">{label}</label>}
      <input className="input" {...rest} />
    </div>
  );
};

export default Input;
