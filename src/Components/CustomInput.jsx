import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import PhoneInput from 'react-phone-number-input/react-native-input';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <PhoneInput
      ref={inputRef}
      {...props}
    />
  );
});

export default CustomInput;