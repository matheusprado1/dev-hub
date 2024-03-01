import StyledButton from "./style";

const Button = ({ children, onClick, ...props }) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button;
