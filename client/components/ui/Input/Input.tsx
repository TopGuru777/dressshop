import React from 'react';

import styles from './Input.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  name: string;
  id: string;
  value: string;
  type: 'text' | 'password' | 'email' | 'number';
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  placeholder?: string;
  autoComplete?: string | undefined;
  required?: boolean;
}

const Input = ({
  label,
  name,
  id,
  value,
  onChange,
  type,
  error,
  placeholder,
  autoComplete = 'false',
  required,
  ...rest
}: Props) => {
  const inputClassName = error ? `${styles.input} ${styles.error}` : styles.input;

  return (
    <>
      <div className={styles.group}>
        {label && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        )}
        <input
          className={inputClassName}
          type={type}
          id={id}
          onChange={onChange}
          name={name}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
