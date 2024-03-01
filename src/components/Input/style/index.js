import styled from "styled-components";

export const InputContainer = styled.div`
  label {
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 10px;
    width: 88%;
  }


`

export const StyledInput = styled.input`
  background-color: ${props => props.theme.colors.grey2};
  border: 1px solid ${props => props.theme.colors.grey0};
  border-radius: 4px;
  height: 30px;
  padding: 0 17px;
  width: 100%;

`
