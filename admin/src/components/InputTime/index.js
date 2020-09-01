import React from 'react';
import Wrapper from './Wrapper';
import { Description, ErrorMessage, Label } from '@buffetjs/styles';

const InputTime = props => {

    const {
      autoFocus,
      className,
      deactivateErrorHighlight,
      disabled,
      error: inputError,
      inputClassName,
      inputDescription,
      inputStyle,
      label,
      name,
      onBlur: handleBlur,
      onChange,
      placeholder,
      resetProps,
      style,
      tabIndex,
      validations,
      value,
      ...rest
    } = props;

    return (
        <Wrapper
          style={style}
        >
        <Label htmlFor={name}>{label}</Label>
        <input
            {...props}
            type="time"
            step="1"
        />
        </Wrapper>
    );
};

export default InputTime;