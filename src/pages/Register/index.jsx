import Layout from "../../components/Layout/styles";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { RegisterFormContainer, FlexContainer } from "./style";
import Button from "../../components/Button";

import { Link } from "react-router-dom";


const Register = () => {
  return (
    <Layout>
      <FlexContainer>
        <Logo>Dev Hub</Logo>
        <Button>
          <Link to="/">
            Voltar
          </Link>
        </Button>
      </FlexContainer>
      <RegisterFormContainer>
        <Form
          title="Crie sua conta"
          fields={[
            { label: "Nome", type: "text", placeholder: "Digite aqui seu nome" },
            { label: "Email", type: "email", placeholder: "Digite aqui seu email" },
            { label: "Senha", type: "password", placeholder: "Digite aqui sua senha" },
            { label: "Confirmar Senha", type: "password", placeholder: "Confirme sua senha" },
            { label: "Bio", type: "text", placeholder: "Fale sobre você" },
            { label: "Contato", type: "text", placeholder: "Opção de contato" }
          ]}
          submitText="Cadastrar"
          $background="primary"
        />
      </RegisterFormContainer>
    </Layout>
  )
}

export default Register;
