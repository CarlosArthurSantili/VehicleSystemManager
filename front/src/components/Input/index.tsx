import { color } from "../../global/styles";
import { Container, ContainerInput } from "./styles";
import { InputHTMLAttributes } from "react";

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input(props: PropsInput) {
  const theme = color;

  return (
    <Container>
      {String(props?.value ?? "").length >= 1 && <label>{props.label}</label>}
      <ContainerInput theme={theme} {...props} />
    </Container>
  );
}
