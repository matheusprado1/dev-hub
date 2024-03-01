import { forwardRef } from "react";
import { InputContainer, StyledInput } from "./style";
import StyledMessage from "../Message/style";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <InputContainer>
      <label>
        {label}
        <StyledInput ref={ref} {...rest} />
        {error ? <StyledMessage>{error.message}</StyledMessage> : null}
      </label>
    </InputContainer>
  )
})

export default Input;


