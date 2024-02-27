import styled from "styled-components";

const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: ${props => props.theme.typography.headline.split(' ')[0]};
  font-size: ${props => props.theme.typography.headline.split(' ')[1]};

`

export default LabelContainer;

