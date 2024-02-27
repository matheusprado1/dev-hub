import styled from "styled-components";

const InputContainer = styled.input`
  background-color: ${props => props.theme.colors.grey2};
  border: 1px solid ${props => props.theme.colors.grey0};
  border-radius: 4px;
  height: 30px;
  padding: 0 17px;

`

export default InputContainer;