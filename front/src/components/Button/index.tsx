import { color } from "../../global/styles";
import { Container } from "./styles";
import { ButtonHTMLAttributes } from 'react';

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement>{}

export function Button(props: PropsButton) {
  const theme = color;

  return (
    <Container theme={theme} {...props}/>
  );
}
