import React, { ReactNode } from "react";

interface SelectProps {
  placeholder?: string;
  className?: string;
  register?: any;
  name?: string;
  id?: string;
  errors?: string;
  options?: (string | { value: string | number; text: string })[];
  required?: boolean;
  children?: ReactNode;
}

const Select: React.FC<SelectProps> = ({
  placeholder,
  className = "  border border-gray-400 text-gray-500 text-sm rounded focus:ring-primary  primary block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500",
  register = null,
  name = "",
  id = "",
  errors,
  options = [],
  required,
  children,
}) => {
  return (
    <div className="input">
      <div className={`input-1 ${className}`}>
        <select
          placeholder={placeholder}
          required={required}
          name={name}
          id={id}
          {...register}
          data-testid="select-element"
          defaultValue={placeholder && ""}
        >
          {placeholder && (
            <option value="" disabled className="placeholder">
              {placeholder}
            </option>
          )}
          {options && Array.isArray(options) && options.length > 0
            ? options.map((option) => (
                <option
                  value={
                    option && typeof option === "object" ? option.value : option
                  }
                  key={
                    option && typeof option === "object" ? option.value : option
                  }
                >
                  {option && typeof option === "object" ? option.text : option}
                </option>
              ))
            : React.Children.map(children, (child) =>
                React.cloneElement(child as React.ReactElement<any>, {
                  className: `${
                    (child as React.ReactElement<any>).props.className
                  } img-special-class`,
                })
              )}
        </select>
      </div>
      {errors && (
        <p className="error" data-testid="errors">
          {errors}
        </p>
      )}
    </div>
  );
};

export default Select;
