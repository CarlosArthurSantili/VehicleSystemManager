import { Header } from "../../components/Header";
import Decoration from "../../assets/decoration.svg";

import { Body, Container, WrapperTitle } from "./styles";
import { Table } from "../../components/Tables/TableEmployee";
import { useState } from "react";
import { ModalEmployee } from "./components/Modal";

export function Employee() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [currentEmployee, setCurrentEmployee] = useState<number>();

  const handleEmployeeEditClick = (id: number) => {
    setVisibleModal(true);
    setCurrentEmployee(id);
  };

  const onModalClose = () => {
    setVisibleModal(false);
    setCurrentEmployee(undefined);
  };
  const employees = [
    {
      idFuncionario:1,
      nome:'Christopher Marim',
      cpf:'16514119727'
    },
    {
      idFuncionario:2,
      nome:'Geovanna Antonello',
      cpf:'16548913242'
    },
  ];
  return (
    <Container>
      <Header visibleSearch={false} />
      <img className="imgDecoration" alt="decoration" src={Decoration} />
      {visibleModal && <ModalEmployee onClose={onModalClose} idEmployee={currentEmployee} />}

      <Body>
        <WrapperTitle>
          <h1>Funcionários</h1>
          <button
            type="button"
            className="buttonSimulation"
            onClick={() => {
              setVisibleModal(true);
            }}
          >
            Cadastrar Funcionário
          </button>
        </WrapperTitle>
        <Table employees={employees} callback={handleEmployeeEditClick} />
      </Body>
    </Container>
  );
}
