import Label from "../Label";
import Input from "../Input";
import Button from "../Button";
import FormContainer from "./style";

const Form = ({ title, fields, onSubmit, submitText, ...props }) => {
  return (
    <FormContainer>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <Label key={index}>
            {field.label}
            <Input type={field.type} placeholder={field.placeholder} {...field.register} options={field.options} />
          </Label>
        ))}
        <Button type="submit" {...props}>
          {submitText}
        </Button>
      </form>
    </FormContainer>
  )
}


export default Form;
