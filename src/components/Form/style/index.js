import styled from "styled-components";

const FormContainer = styled.div`

  form {
    display: flex;
    flex-direction: column;
    gap: 17px;
    text-align: left;
  }
  h2 {
    font-weight: ${props => props.theme.typography.title1.split(' ')[0]};
    font-size: ${props => props.theme.typography.title1.split(' ')[1]};
  }
  

`

export default FormContainer;