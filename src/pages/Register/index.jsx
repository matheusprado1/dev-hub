import Layout from "../../components/Layout/styles";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { RegisterFormContainer, FlexContainer } from "./style";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/registerSchema";

import { Link } from "react-router-dom";

const Register = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  });

  const submit = async (formData) => {
    console.log(formData);
    try {
      const response = await api.post("/users", {
        email: formData.email,
        password: formData.password,
        name: formData.name,
        bio: formData.bio,
        contact: formData.contact,
        course_module: formData.course_module
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <FlexContainer>
        <Logo>Dev Hub</Logo>
        <Link to="/">
          <Button>
            Voltar
          </Button>
        </Link>
      </FlexContainer>
      <RegisterFormContainer>
        <h2>Crie sua Conta</h2>
        <p>Rápido e gratís, vamos nessa</p>
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="text"
            id="name"
            placeholder="Digite seu nome"
            label="Nome"
            {...register("name")}
            error={errors.name}
          />
          <Input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
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
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            label="Confirmar Senha"
            {...register("confirmPassword")}
            error={errors?.confirmPassword}
          />
          <Input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            label="Bio"
            {...register("bio")}
            error={errors.bio}
          />
          <Input
            type="text"
            id="contact"
            placeholder="Digite seu contato"
            label="Contato"
            {...register("contact")}
            error={errors.contact}
          />
          <Select
            options={[
              { value: '', label: 'Selecione uma opção' },
              { value: 'Primeiro módulo (Introdução ao Frontend)', label: 'Módulo 1' },
              { value: 'Segundo módulo (Frontend Avançado)', label: 'Módulo 2' },
              { value: 'Terceiro módulo (Introdução ao Backend)', label: 'Módulo 3' },
              { value: 'Quarto módulo (Backend Avançado)', label: 'Módulo 4' }
            ]}
            {...register("course_module")}
            error={errors.course_module}
          />
          <Button type="submit">
            Entrar
          </Button>
        </form>
      </RegisterFormContainer>
    </Layout>

  );
}

export default Register;
