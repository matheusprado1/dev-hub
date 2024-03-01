import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:  100%;
  height: ${props => props.$height};
`;

export default Layout;
