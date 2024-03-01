import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import LoginFormContainer from "./style";
import Layout from "../../components/Layout/styles";
import Logo from "../../components/Logo";
import Button from "../../components/Button";
import { loginSchema } from "../../schemas/loginSchema";
import Input from "../../components/Input";

import { toast } from 'react-toastify';

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
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <Layout>
      <Logo>Dev Hub</Logo>
      <LoginFormContainer>
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
          <Button type="submit">
            Entrar
          </Button>
        </form>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">
          <Button type="submit">
            Cadastrar
          </Button>
        </Link>
      </LoginFormContainer>
    </Layout>

  );
}


export default Login;
