import styled from "styled-components";

const StyledButton = styled.button`
  height: 40px;
  background: ${props => props.theme.colors[props.$background] || props.theme.colors.grey1};
  color: ${props => props.theme.colors[props.color] || "#FFF"};
  border: none;
  border-radius: 4px;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors[props.$hover] || "#FF427F"};
  }
`

export default StyledButton;