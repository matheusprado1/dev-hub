import styled from "styled-components";

const StyledSelect = styled.select`
  background-color: ${props => props.theme.colors.grey2};
  border: 1px solid ${props => props.theme.colors.grey0};
  border-radius: 4px;
  height: 30px;
  padding: 0 17px;
  width: 100%;


`

export default StyledSelect;