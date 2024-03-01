import { forwardRef } from "react";
import { InputContainer, StyledInput } from "./style";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <InputContainer>
      <label>
        {label}
        <StyledInput ref={ref} {...rest} />
        {error ? <p>{error.message}</p> : null}
      </label>
    </InputContainer>
  )
})

export default Input;


