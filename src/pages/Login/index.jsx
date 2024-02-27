import LoginFormContainer from "./style";
import Layout from "../../components/Layout/styles";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <Logo>Dev Hub</Logo>
      <LoginFormContainer>
        <Form
          title="Login"
          fields={[
            { label: "Email", type: "email", placeholder: "seuemail@mail.com" },
            { label: "Senha", type: "password", placeholder: "******" }
          ]}
          submitText="Entrar"
          $background="primary"
        />
        <p>Ainda não tem conta?</p>
        <Button>
          <Link to="/register">
            Cadastrar
          </Link>
        </Button>
      </LoginFormContainer>
    </Layout>
  )
}

export default Login;
