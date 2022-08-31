import React from "react";
import { IPetrolPump, ITypeGasoline } from "../../../interfaces/petrolPump";
import { Container, Th, Tr } from "../styles";

interface Props {
  petrolPumps?: IPetrolPump[];
  callback(id: number): void;
}

export function Table({ petrolPumps, callback }: Props) {
  return (
    <Container>
      <Tr>
        <Th>Id</Th>
        <Th>Tipo de Combustivel</Th>
        <Th>Quantidade</Th>
      </Tr>
      {petrolPumps?.map((petrolPump) => (
        <Tr
          className="body"
          key={petrolPump.idBomba}
          onClick={() => callback(petrolPump.idBomba)}
        >
          <h4>{petrolPump?.idBomba}</h4>
          {/*@ts-ignore*/}
          <h4>{petrolPump?.tipoCombustivel}</h4>
          <h4 style={{ textAlign: "end" }}>
            {petrolPump?.qtdEstoque}/{petrolPump?.capacidadeBomba}
          </h4>
        </Tr>
      ))}
    </Container>
  );
}
