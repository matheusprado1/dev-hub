import { forwardRef } from "react";
import InputContainer from "./style"

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ type, register, options, ...rest }, ref) => {
  // Verifica se o tipo é 'select' e renderiza um elemento select, caso contrário renderiza um InputContainer
  if (type === 'select') {
    return (
      <select ref={ref} {...rest} {...register}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  } else {
    return (
      <InputContainer ref={ref} {...rest} {...register} />
    );
  }
});

export default Input;
