import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

import Layout from "../../components/Layout/style";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import StyledTitle from "../../components/Title/style";

import LoginFormContainer from "./style";
import { loginSchema } from "../../schemas/loginSchema";


const Login = ({ onLoginSuccess }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  const navigate = useNavigate();

  const submit = async (formData) => {
    try {
      const response = await api.post("/sessions", {
        email: formData.email,
        password: formData.password,
      });

      toast.success("Login realizado com sucesso!");

      const userData = response.data.user;
      const token = response.data.token;

      localStorage.setItem("token", token);
      onLoginSuccess(userData);

      navigate("/dashboard");

      return userData;
    } catch (error) {
      console.error(error);
      toast.error("Credênciais incorretas!");
    }
  };

  return (
    <Layout $height="100vh">
      <Logo>Dev Hub</Logo>
      <LoginFormContainer>
        <StyledTitle>Login</StyledTitle>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="text"
            id="email"
            placeholder="Digite seu email"
            label="E-mail"
            {...register("email")}
            error={errors.email}
          />
          <Input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            label="Senha"
            {...register("password")}
            error={errors.password}
          />
          <Button type="submit" $background="primary">
            Entrar
          </Button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">
          <Button type="submit" $hover="grey2">
            Cadastrar
          </Button>
        </Link>
      </LoginFormContainer>
    </Layout>

  );
}


export default Login;
