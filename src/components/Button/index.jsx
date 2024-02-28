import ButtonContainer from "./style";

const Button = ({ children, onClick, ...props }) => {
  return (
    <ButtonContainer {...props} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button;
