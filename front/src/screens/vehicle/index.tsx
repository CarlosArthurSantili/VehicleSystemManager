import { Header } from "../../components/Header";
import Decoration from "../../assets/decoration.svg";

import { Body, Container, WrapperTitle } from "./styles";
import { Table } from "../../components/Tables/TableVehicle";
import { useEffect, useState } from "react";
import { ModalVehicle } from "./components/Modal";
import { useVehicles } from "../../hooks/useVehicles";
import { Loader } from "../../components/Loader";

export function Vehicle() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [currentVehicle, setCurrentVehicle] = useState<number>();

  const handleVehicleEditClick = (id: number) => {
    setVisibleModal(true);
    setCurrentVehicle(id);
  };

  const onModalClose = () => {
    setVisibleModal(false);
    setCurrentVehicle(undefined);
  };

  const { refreshVehicles, data, loading } = useVehicles();

  useEffect(() => {
    refreshVehicles();
  }, []);

  return (
    <Container>
      <Header visibleSearch={false} />
      <img className="imgDecoration" alt="decoration" src={Decoration} />
      {visibleModal && (
        <ModalVehicle onClose={onModalClose} idVehicle={currentVehicle} />
      )}

      <Body>
        <WrapperTitle>
          <h1>Veículos</h1>
          <button
            type="button"
            className="buttonSimulation"
            onClick={() => {
              setVisibleModal(true);
            }}
          >
            Cadastrar veículo
          </button>
        </WrapperTitle>
        <Table vehicles={data} callback={handleVehicleEditClick} />
        {loading && (
          <Loader/>
        )}
      </Body>
    </Container>
  );
}
