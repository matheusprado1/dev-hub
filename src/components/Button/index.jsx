import ButtonContainer from "./style";

const Button = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  )
}

export default Button;
