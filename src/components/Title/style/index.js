import styled from "styled-components";

const StyledTitle = styled.h2`

  font-weight: ${props => props.theme.typography.title2.split(' ')[0]};
  font-size: ${props => props.theme.typography.title2.split(' ')[1]};
 

`
export default StyledTitle;