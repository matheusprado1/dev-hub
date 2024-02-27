import LabelContainer from "./style";

const Label = ({ children, htmlFor }) => {
  return (
    <LabelContainer htmlFor={htmlFor}>
      {children}
    </LabelContainer>
  )
}

export default Label;
