import { Header } from "../../components/Header";
import Decoration from "../../assets/decoration.svg";

import { Body, Container, WrapperTitle } from "./styles";
import { Table } from "../../components/Tables/TableEmployee";
import { useEffect, useState } from "react";
import { ModalEmployee } from "./components/Modal";
import { useEmployee } from "../../hooks/useEmployee";
import { Loader } from "../../components/Loader";

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

  const { refreshEmployees, data, loading } = useEmployee();

  useEffect(() => {
    refreshEmployees();
  }, []);

  return (
    <Container>
      <Header visibleSearch={false} />
      <img className="imgDecoration" alt="decoration" src={Decoration} />
      {visibleModal && (
        <ModalEmployee onClose={onModalClose} idEmployee={currentEmployee} />
      )}

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
        <Table employees={data} callback={handleEmployeeEditClick} />
        {loading && <Loader />}
      </Body>
    </Container>
  );
}
