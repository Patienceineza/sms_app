import React, { useState } from 'react';

interface TextAreaProps {
  placeholder: string;
  className?: string;
  defaultValue?: string;
  register?: any;
  name?: string;
  errors?: string;
  max?: number;
  cols?: number;
  rows?: number;
  resize?: 'vertical' | 'horizontal';
  required?: boolean;
}

function TextArea({
  placeholder,
  className = '',
  defaultValue = '',
  register = null,
  name = '',
  errors,
  max = 2000,
  cols,
  rows = 5,
  resize = 'vertical',
  required,
}: TextAreaProps) {
  const [resizeStyle] = useState(() => {
    if (resize.toLowerCase() === 'vertical') return 'vertical';
    if (resize.toLowerCase() === 'horizontal') return 'horizontal';
    return 'vertical';
  });

  return (
    <div className="input">
      <div className={`input-1 ${className}`}>
        <textarea
          defaultValue={defaultValue}
          
          required={required}
          name={name}
          {...register}
          data-testid="textarea-element"
          style={{ resize: resizeStyle }}
          cols={cols}
          rows={rows}
        />
      </div>
      {errors && (
        <p className="error" data-testid="errors">
          {errors}
        </p>
      )}
    </div>
  );
}

export default TextArea;
