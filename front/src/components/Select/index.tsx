import { Container, ContainerSelect } from "./styles";
import { SelectHTMLAttributes } from "react";

interface PropsSelect extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: { id: number | string; name: string }[];
}

export function Select(props: PropsSelect) {
  return (
    <Container>
      <label>{props.label}</label>
      <ContainerSelect {...props}>
        {props.options?.map(({ name, id }) => (
          <option value={id}>{name}</option>
        ))}
      </ContainerSelect>
    </Container>
  );
}
