import { copyFile } from "fs/promises";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Modal } from "../../../../components/Modal";
import { useEmployee } from "../../../../hooks/useEmployee";
import { IEmployee } from "../../../../interfaces/employee";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "../../../../services/employee";

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

  const { refreshEmployees } = useEmployee();

  const HandleCreateEmployee = async () => {
    let data: IEmployee = { cpf: cpf, nome: name } as IEmployee;
    const response = await createEmployee(data);
    if (response?.data.success) {
      refreshEmployees();
      onClose();
    }
  };

  const SetCurrentEmployee = useCallback(async () => {
    console.log(idEmployee);
    if (idEmployee) {
      const response = await getEmployee(idEmployee);
      console.log(response);
      const employee = response?.data?.employee;

      setName(employee?.nome || "");
      setcpf(employee?.cpf || "");
    }
  }, [idEmployee]);

  const DeleteCurrentEmployee = useCallback(async () => {
    if (idEmployee) {
      const response = await deleteEmployee(idEmployee);
      if (response?.data.success) {
        refreshEmployees();
        onClose();
        alert("Deletado com sucesso");
      }
    }
  }, [idEmployee]);

  const UpdateCurrentEmployee = async () => {
    if (idEmployee) {
      const response = await updateEmployee(idEmployee, {
        nome: name,
        cpf: cpf,
      } as IEmployee);
      if (response?.data.success) {
        refreshEmployees();
        onClose();
        alert("Editado com sucesso");
      }
    }
  };

  useEffect(() => {
    SetCurrentEmployee();
  }, [SetCurrentEmployee]);

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
              onClick={DeleteCurrentEmployee}
            >
              Excluir
            </Button>
          )}
          <Button
            type="button"
            style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
            onClick={() => {
              if (idEmployee) {
                UpdateCurrentEmployee();
              } else {
                HandleCreateEmployee();
              }
            }}
          >
            {idEmployee ? "Editar" : "Cadastrar"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
