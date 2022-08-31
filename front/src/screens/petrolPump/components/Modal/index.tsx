import { useCallback, useMemo, useState } from "react";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { FormRefuelVehicle } from "../../forms/formRefuelVehicle";
import { InfosPetrolPump } from "../../forms/management";
import { FormRefuelPetrolPump } from "./../../forms/formRefuelPetrolPump/index";

interface Props {
  onClose(): void;
  onRefresh(): void;
  idPetrolPump?: number;
}

export function ModalPetrolPump({ idPetrolPump, onClose, onRefresh }: Props) {
  //states
  const [infosPetrolPumpVisible, setInfosPetrolPumpVisible] = useState(
    false || !idPetrolPump
  );
  const [refuelVehicleVisible, setRefuelVehicleVisible] = useState(false);
  const [refuelPetrolPumpVisible, setRefuelPetrolPumpVisible] = useState(false);

  //memos
  const buttonsVisible = useMemo(
    () =>
      infosPetrolPumpVisible || refuelVehicleVisible || refuelPetrolPumpVisible,
    [infosPetrolPumpVisible, refuelVehicleVisible, refuelPetrolPumpVisible]
  );

  const title = useMemo(() => {
    if (refuelVehicleVisible) return "Abastecer veículo";
    if (refuelPetrolPumpVisible) return "Comprar combustível";
    if (infosPetrolPumpVisible && idPetrolPump)
      return "Gerenciamento de Bomba " + idPetrolPump;
    if (infosPetrolPumpVisible) return "Cadastrar Bomba";
  }, [
    refuelVehicleVisible,
    refuelPetrolPumpVisible,
    infosPetrolPumpVisible,
    idPetrolPump,
  ]);

  const handleBackCLick = useCallback(() => {
    setInfosPetrolPumpVisible(false);
    setRefuelVehicleVisible(false);
    setRefuelPetrolPumpVisible(false);
  }, []);

  const successEvent = useCallback(() => {
    onRefresh();
    onClose();
  }, []);

  return (
    <Modal
      title={title || "O que deseja fazer?"}
      onClose={onClose}
      onBack={handleBackCLick}
    >
      <>
        {infosPetrolPumpVisible && (
          <InfosPetrolPump
            callback={successEvent}
            idPetrolPump={idPetrolPump}
          />
        )}
        {refuelVehicleVisible && <FormRefuelVehicle idPetrolPump={idPetrolPump}  callback={successEvent}/>}
        {refuelPetrolPumpVisible && <FormRefuelPetrolPump idPetrolPump={idPetrolPump} callback={successEvent}/>}
        {!buttonsVisible && (
          <div
            style={{
              display: "flex",
              marginBottom: 20,
              flexDirection: window.innerWidth < 1200 ? "column" : "row",
            }}
          >
            <Button
              type="button"
              style={{
                width: "100%",
                marginRight: 20,
                marginBottom: window.innerWidth < 1200 ? 20 : 0,
              }}
              onClick={() => {
                setRefuelVehicleVisible(true);
              }}
            >
              Abastecer Veiculo
            </Button>

            <Button
              type="button"
              style={{
                width: "100%",
                marginRight: 20,
                marginBottom: window.innerWidth < 1200 ? 20 : 0,
              }}
              onClick={() => {
                setRefuelPetrolPumpVisible(true);
              }}
            >
              Comprar Combustivel
            </Button>

            <Button
              type="button"
              style={{
                width: "100%",
                marginRight: 20,
                marginBottom: window.innerWidth < 1200 ? 20 : 0,
              }}
              onClick={() => {
                setInfosPetrolPumpVisible(true);
              }}
            >
              Editar/excluir Bomba
            </Button>
          </div>
        )}
      </>
    </Modal>
  );
}
