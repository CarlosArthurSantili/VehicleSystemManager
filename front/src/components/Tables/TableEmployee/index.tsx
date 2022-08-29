import React from "react";
import { IEmployee } from "../../../interfaces/employee";
import { Container, Th, Tr } from "../styles";

interface Props {
  employees: IEmployee[];
  callback(id: number): void;
}

export function Table({ employees, callback }: Props) {
  return (
    <Container>
      <Tr>
        <Th>Nome</Th>
        <Th>CPF</Th>
      </Tr>
      {employees.map((employee) => (
        <Tr
          className="body"
          key={employee.idFuncionario}
          onClick={() => callback(employee.idFuncionario)}
        >
          <h4>{employee?.nome}</h4>
          <h4 style={{textAlign: "end"}}>{employee?.cpf}</h4>
        </Tr>
      ))}
    </Container>
  );
}
