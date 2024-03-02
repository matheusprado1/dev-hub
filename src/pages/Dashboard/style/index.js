import styled from "styled-components";

export const HeaderContainer = styled.div`

display: flex;
justify-content: space-between;
padding: 17px;
align-items: center;
border-bottom: 1px solid ${props => props.theme.colors.grey3};



`

export const InfoContainer = styled.div`

display: flex;
flex-direction: column;
gap: 10px;
padding: 17px;
border-bottom: 1px solid ${props => props.theme.colors.grey3};
`

export const MainContainer = styled.div`

display: flex;
flex-direction: column;
gap: 10px;
padding: 17px;

`
