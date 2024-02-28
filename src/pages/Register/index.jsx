import Layout from "../../components/Layout/styles";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import { RegisterFormContainer, FlexContainer } from "./style";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

import { Link } from "react-router-dom";

const Register = () => {

  const { register, handleSubmit } = useForm();

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
        <Button>
          <Link to="/">
            Voltar
          </Link>
        </Button>
      </FlexContainer>
      <RegisterFormContainer>
        <Form
          title="Crie sua conta"
          onSubmit={handleSubmit(submit)}
          noValidate
          fields={[
            { label: "Nome", type: "text", placeholder: "Digite aqui seu nome", register: register("name") },
            { label: "Email", type: "email", placeholder: "Digite aqui seu email", register: register("email") },
            { label: "Senha", type: "password", placeholder: "Digite aqui sua senha", register: register("password") },
            { label: "Confirmar Senha", type: "password", placeholder: "Confirme sua senha" },
            { label: "Bio", type: "text", placeholder: "Fale sobre você", register: register("bio") },
            { label: "Contato", type: "text", placeholder: "Opção de contato", register: register("contact") },
            {
              label: "Módulo de Curso", type: "select", placeholder: "Escolha um módulo", register: register("course_module"), options: [
                { value: "module1", label: "Módulo 1" },
                { value: "module2", label: "Módulo 2" },
                { value: "module3", label: "Módulo 3" },

              ]
            }
          ]}
          submitText="Cadastrar"
          $background="primary"
        />
      </RegisterFormContainer>
    </Layout>
  )
}

export default Register;
