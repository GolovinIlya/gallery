/* eslint-disable array-callback-return */
import React from "react";
import "./input.scss";

interface SelectProps {
  placeholder: string;
  value?: string;
  onChange?: any;
}

export const Input: React.FC<SelectProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="input">
      <input
        className="input__item"
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};
