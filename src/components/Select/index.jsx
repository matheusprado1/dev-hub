import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Select = forwardRef(({ options, register, ...rest }, ref) => {
  return (
    <select ref={ref} {...rest} {...register}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
});

export default Select;
