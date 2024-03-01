import styled from "styled-components";

const ButtonContainer = styled.button`
  height: 40px;
  background-color: ${props => props.theme.colors[props.$background] || props.theme.colors.grey1};
  border: none;
  border-radius: 4px;
  width: 100%;
`

export default ButtonContainer;