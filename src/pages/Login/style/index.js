import styled from "styled-components";

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:  17px;
  padding: 20px 17px;
  text-align: center;
  width:  300px;
  border-radius:  4px;
  box-shadow:  0px  4px  40px -10px #00000040;
  background: ${props => props.theme.colors.grey3};
  p {
    font-size: 10px;
    color: ${props => props.theme.colors.grey1}
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 17px;
    text-align: left;
    label {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-weight: ${props => props.theme.typography.headline.split(' ')[0]};
      font-size: ${props => props.theme.typography.headline.split(' ')[1]};
    }
    }

`;

export default LoginFormContainer;