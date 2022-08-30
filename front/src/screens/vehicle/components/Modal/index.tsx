import { ChangeEvent, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { useVehicles } from "../../../../hooks/useVehicles";
import { IVehicle } from "../../../../interfaces/vehicle";
import { createVehicle } from "../../../../services/vehicle";

interface Props {
  onClose(): void;
  idVehicle?: number;
}

export function ModalVehicle({ idVehicle, onClose }: Props) {
  const [capacity, setCapacity] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [plate, setPlate] = useState<string>("");

  const onChangeInputCapacity = (e: ChangeEvent<HTMLInputElement>) => {
    setCapacity(e.target.value);
  };
  const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeInputPlate = (e: ChangeEvent<HTMLInputElement>) => {
    setPlate(e.target.value);
  };

  const {refreshVehicles} = useVehicles();

  const HandleCreateVehicle = async () => {
    const data:IVehicle = {
      capacidadeTanque: Number(capacity),
      descricao:name,
      placa:plate,
    } as IVehicle; 
  const response =  await createVehicle(data)
  if(response){
  
      refreshVehicles()
      onClose()
     
  }
  }

  return (
    <Modal
      title={`${idVehicle ? "Gerenciamento de " : "Cadastrar"} Veículo`}
      onClose={onClose}
    >
      <div className="group">
        <div className="groupInputs">
          <Input
            placeholder="Nome"
            label={"Nome"}
            type={"text"}
            value={name}
            onChange={onChangeInputName}
            maxLength={30}
            style={{ width: "100%", marginBottom: 10 }}
          />
          <Input
            placeholder="Digite a placa"
            label={"Placa"}
            value={plate}
            type={"text"}
            maxLength={8}
            onChange={onChangeInputPlate}
            style={{ width: "100%", marginBottom: 10 }}
          />
          <Input
            placeholder="Capacidade do tanque"
            maxLength={3}
            label={"Litros"}
            type={"number"}
            value={capacity}
            onChange={onChangeInputCapacity}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ display: "flex"}}>
          {idVehicle && (
            <Button
              type="button"
              style={{
                width: "100%",
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "transparent",
                color:'gray'
              }}
              onClick={() => {}}
            >
              Excluir
            </Button>
          )}
          <Button
            type="button"
            style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
            onClick={() => {
              if(idVehicle){}
              else
              HandleCreateVehicle()
            }}
          >
            {idVehicle ? "Editar" : "Cadastrar"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
