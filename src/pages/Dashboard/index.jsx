import Logo from "../../components/Logo";
import Button from "../../components/Button";

import { InfoContainer, HeaderContainer, MainContainer } from "./style";

const Dashboard = () => {
  return (
    <>
      <HeaderContainer>
        <Logo>Dev Hub</Logo>
        <Button>Sair</Button>
      </HeaderContainer>
      <InfoContainer>
        <h2>Olá, Matheus Prado</h2>
        <p>Primeiro módulo (introdução ao Frontend)</p>
      </InfoContainer>
      <MainContainer>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </MainContainer>
    </>

  )
}

export default Dashboard;