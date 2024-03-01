import { forwardRef } from "react";
import StyledSelect from "./style";

// eslint-disable-next-line react/display-name
const Select = forwardRef(({ options, register, id, ...rest }, ref) => {
  return (
    <>
      <label htmlFor={id}>
        Selecionar Módulo
      </label>
      <StyledSelect id={id} ref={ref} {...rest} {...register}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </StyledSelect>
    </>
  );
});

export default Select;
