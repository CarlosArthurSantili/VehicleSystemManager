import { Header } from "../../components/Header";
import Decoration from "../../assets/decoration.svg";

import { Body, Container, WrapperTitle } from "./styles";
import { Table } from "../../components/Tables/TablePetrolPump";
import { useCallback, useEffect, useState } from "react";
import { ModalPetrolPump } from "./components/Modal";
import { IPetrolPump } from "../../interfaces/petrolPump";
import { getPetrolPumps } from "../../services/petrolPump";

export function PetrolPump() {
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [data, setData] = useState<IPetrolPump[]>();
  const [currentPetrolPump, setCurrentPetrolPump] = useState<number>();

  const handlePetrolPumpEditClick = (id: number) => {
    setVisibleModal(true);
    setCurrentPetrolPump(id);
  };

  const onModalClose = () => {
    setVisibleModal(false);
    setCurrentPetrolPump(undefined);
  };

  const SetCurrentPetrolPump = useCallback(async () => {
    const response = await getPetrolPumps();
    const dataAux = response?.data?.gasBomb as IPetrolPump[];
    console.log(dataAux);
    setData(dataAux);
  }, []);

  useEffect(() => {
    SetCurrentPetrolPump();
  }, [SetCurrentPetrolPump]);

  return (
    <Container>
      <Header visibleSearch={false} />
      <img className="imgDecoration" alt="decoration" src={Decoration} />
      {visibleModal && (
        <ModalPetrolPump
          onRefresh={SetCurrentPetrolPump}
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
        <Table petrolPumps={data} callback={handlePetrolPumpEditClick} />
      </Body>
    </Container>
  );
}
