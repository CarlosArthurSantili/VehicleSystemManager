import { Header } from "../../components/Header";
import Decoration from "../../assets/decoration.svg";

import { Body, Container, WrapperTitle } from "./styles";
import { Table } from "../../components/Tables/TablePetrolPump";
import { useState } from "react";
import { ModalPetrolPump } from "./components/Modal";
import { IPetrolPump } from "../../interfaces/petrolPump";

export function PetrolPump() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [currentPetrolPump, setCurrentPetrolPump] = useState<number>();

  const handlePetrolPumpEditClick = (id: number) => {
    setVisibleModal(true);
    setCurrentPetrolPump(id);
  };

  const onModalClose = () => {
    setVisibleModal(false);
    setCurrentPetrolPump(undefined);
  };
  const petrolPumps: IPetrolPump[] = [
    {
      idBomba: 1,
      capacidadeBomba: 200,
      qtdEstoque: 25,
      tipoCombustivel: { idGasolina: 1, nome: "Diesel" },
    },
    {
      idBomba: 2,
      capacidadeBomba: 235,
      qtdEstoque: 150,
      tipoCombustivel: { idGasolina: 2, nome: "Etanol" },
    },
    
  ];
  return (
    <Container>
      <Header visibleSearch={false} />
      <img className="imgDecoration" alt="decoration" src={Decoration} />
      {visibleModal && (
        <ModalPetrolPump
          onClose={onModalClose}
          idPetrolPump={currentPetrolPump}
        />
      )}

      <Body>
        <WrapperTitle>
          <h1>Bombas</h1>
          <button
            type="button"
            className="buttonSimulation"
            onClick={() => {
              setVisibleModal(true);
            }}
          >
            Cadastrar Bomba
          </button>
        </WrapperTitle>
        <Table petrolPumps={petrolPumps} callback={handlePetrolPumpEditClick} />
      </Body>
    </Container>
  );
}
