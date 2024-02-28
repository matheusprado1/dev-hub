import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LoginFormContainer from "./style";
import Layout from "../../components/Layout/styles";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import Button from "../../components/Button";
import { api } from "../../services/api";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const submit = async (formData) => {

    console.log(formData)
    try {
      const response = await api.post("/sessions", {
        email: formData.email,
        password: formData.password,
      });

      console.log(response.data); // Dados retornados pela API
      // Aqui você pode manipular a resposta da API, como armazenar o token de acesso no localStorage
    } catch (error) {
      console.error(error); // Tratamento de erros
    }
  };


  return (
    <Layout>
      <Logo>Dev Hub</Logo>
      <LoginFormContainer>
        <Form
          onSubmit={handleSubmit(submit)}
          noValidate
          title="Login"
          fields={[
            { label: "Email", type: "email", placeholder: "seuemail@mail.com", register: register("email") },
            { label: "Senha", type: "password", placeholder: "******", register: register("password") }
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
