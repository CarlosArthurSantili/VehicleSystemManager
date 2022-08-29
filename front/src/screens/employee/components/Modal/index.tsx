import { ChangeEvent, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";

interface Props {
  onClose(): void;
  idEmployee?: number;
}

export function ModalEmployee({ idEmployee, onClose }: Props) {
  const [name, setName] = useState<string>("");
  const [cpf, setcpf] = useState<string>("");

 
  const onChangeInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeInputcpf = (e: ChangeEvent<HTMLInputElement>) => {
    setcpf(e.target.value);
  };

  return (
    <Modal
      title={`${idEmployee ? "Gerenciamento de " : "Cadastrar"} Funcionário`}
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
            placeholder="Digite o CPF"
            label={"CPF"}
            value={cpf}
            type={"number"}
            maxLength={11}
            onChange={onChangeInputcpf}
            style={{ width: "100%", marginBottom: 10 }}
          />
        </div>
        <div style={{ display: "flex" }}>
          {idEmployee && (
            <Button
              type="button"
              style={{
                width: "100%",
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "transparent",
                color: "gray",
              }}
              onClick={() => {}}
            >
              Excluir
            </Button>
          )}
          <Button
            type="button"
            style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
            onClick={() => {}}
          >
            {idEmployee ? "Editar" : "Cadastrar"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
