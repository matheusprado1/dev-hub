import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:  17px;
  padding: 34px 17px;
  text-align: center;
  width:  300px;
  border-radius:  4px;
  box-shadow:  0px  4px  40px -10px #00000040;
  background: ${props => props.theme.colors.grey3};


`;

export default LoginFormContainer;