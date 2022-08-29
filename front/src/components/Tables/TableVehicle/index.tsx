import React from "react";
import { Container, Th, Tr } from "../styles";
import { IVehicle } from "./../../../interfaces/vehicle/index";

interface Props {
  vehicles?: IVehicle[];
  callback(id: number): void;
}

export function Table({ vehicles, callback }: Props) {
  return (
    <Container>
      <Tr>
        <Th>Nome</Th>
        <Th>Placa</Th>
        <Th>Litros</Th>
      </Tr>
      {vehicles?.map((vehicle) => (
        <Tr
          className="body"
          key={vehicle.idVeiculo}
          onClick={() => callback(vehicle.idVeiculo)}
        >
          <h4>{vehicle?.descricao}</h4>
          <h4 style={{textAlign: "center"}}>{vehicle?.placa}</h4>
          <h4 style={{textAlign: "end"}}>{vehicle?.capacidadeTanque}L</h4>
        </Tr>
      ))}
    </Container>
  );
}
