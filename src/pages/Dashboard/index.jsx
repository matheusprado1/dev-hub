import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { InfoContainer, HeaderContainer, MainContainer } from "./style";

const Dashboard = ({ user, onLogout }) => {

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    toast.success("Logout realizado com sucesso!");
    localStorage.removeItem("token");
    onLogout();
    navigate("/");
  };
  // console.log(user)
  return (
    <>
      <HeaderContainer>
        <Logo>Dev Hub</Logo>
        <Button onClick={handleLogoutClick}>Sair</Button>
      </HeaderContainer>
      <InfoContainer>
        <h2>Olá, {user ? user.name : "Usuário"}</h2>
        <p>{user ? user.course_module : "Crie uma conta para continuar"}</p>
      </InfoContainer>
      <MainContainer>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
      </MainContainer>
    </>

  )
}

export default Dashboard;