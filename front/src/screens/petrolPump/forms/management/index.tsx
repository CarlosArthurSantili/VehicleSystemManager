import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { IPetrolPump, ITypeGasoline } from "../../../../interfaces/petrolPump";
import {
  createPetrolPump,
  deletePetrolPump,
  getPetrolPump,
  updatePetrolPump,
} from "../../../../services/petrolPump";

interface Props {
  idPetrolPump?: number;
  callback(): void;
}
export function InfosPetrolPump({ idPetrolPump, callback }: Props) {
  const [typeGasoline, setTypeGasoline] = useState<string>("Etanol");
  const [capacityPump, setCapacityPump] = useState<string>("");
  const [storagePump, setStoragePump] = useState<string>("");

  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setTypeGasoline(e.target.value);
  };
  const onChangeInputCapacityPump = (e: ChangeEvent<HTMLInputElement>) => {
    setCapacityPump(e.target.value);
  };
  const onChangeInputStoragePump = (e: ChangeEvent<HTMLInputElement>) => {
    setStoragePump(e.target.value);
  };

  const typesGasoline: ITypeGasoline[] = useMemo(() => {
    return [
      { idGasolina: "Etanol", nome: "Etanol" },
      { idGasolina: "Diesel", nome: "Diesel" },
      { idGasolina: "Gasolina Comum", nome: "Gasolina Comum" },
      { idGasolina: "Gasolina Adtivada", nome: "Gasolina Adtivada" },
    ];
  }, []);

  const optionsSelect = useMemo(() => {
    return typesGasoline.map((x) => {
      return { id: x.idGasolina, name: x.nome };
    });
  }, [typesGasoline]);

  const HandleCreatePetrolPump = async () => {
    if (Number(capacityPump) >= Number(storagePump)) {
      let data: IPetrolPump = {
        capacidadeBomba: Number(capacityPump),
        qtdEstoque: Number(storagePump),
        tipoCombustivel: typeGasoline,
      } as IPetrolPump;
      const response = await createPetrolPump(data);
      if (response?.data.success) {
        callback();
      }
    } else {
      alert("Capacidade da bomba deve ser menor que a quantidade de estoque!");
    }
  };

  const SetCurrentPetrolPump = useCallback(async () => {
    if (idPetrolPump) {
      const response = await getPetrolPump(idPetrolPump);
      console.log(response);
      const gasBomb = response?.data?.gasBomb;

      setTypeGasoline(String(gasBomb?.tipoCombustivel) || "");
      setCapacityPump(String(gasBomb?.capacidadeBomba) || "");
      setStoragePump(String(gasBomb?.qtdEstoque) || "");
    }
  }, [idPetrolPump]);

  const DeleteCurrentPetrolPump = useCallback(async () => {
    if (idPetrolPump) {
      const response = await deletePetrolPump(idPetrolPump);
      if (response?.data.success) {
        callback();
        alert("Deletado com sucesso");
      }
    }
  }, [idPetrolPump]);

  const UpdateCurrentPetrolPump = async () => {
    if (idPetrolPump) {
      if (Number(capacityPump) >= Number(storagePump)) {
        const response = await updatePetrolPump(idPetrolPump, {
          capacidadeBomba: Number(capacityPump),
          qtdEstoque: Number(storagePump),
          tipoCombustivel: typeGasoline,
        } as IPetrolPump);
        if (response?.data.success) {
          callback();
          alert("Editado com sucesso");
        }
      } else {
        alert(
          "Capacidade da bomba deve ser menor que a quantidade de estoque!"
        );
      }
    }
  };

  useEffect(() => {
    SetCurrentPetrolPump();
  }, [SetCurrentPetrolPump]);

  return (
    <div className="group">
      <div className="groupInputs">
        <Select
          label={"Tipo de combustivel"}
          onChange={onChangeSelect}
          value={typeGasoline}
          options={optionsSelect}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <Input
          placeholder="Quantidade Estoque"
          label={"Quantidade Estoque"}
          value={storagePump}
          type={"number"}
          maxLength={4}
          onChange={onChangeInputStoragePump}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <Input
          placeholder="Capacidade da Bomba"
          label={"Capacidade da Bomba"}
          value={capacityPump}
          type={"number"}
          maxLength={4}
          onChange={onChangeInputCapacityPump}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>
      <div style={{ display: "flex" }}>
        {idPetrolPump && (
          <Button
            type="button"
            style={{
              width: "100%",
              marginTop: 20,
              marginBottom: 20,
              backgroundColor: "transparent",
              color: "gray",
            }}
            onClick={DeleteCurrentPetrolPump}
          >
            Excluir
          </Button>
        )}
        <Button
          type="button"
          style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
          onClick={() => {
            if (idPetrolPump) {
              UpdateCurrentPetrolPump();
            } else {
              HandleCreatePetrolPump();
            }
          }}
        >
          {idPetrolPump ? "Editar" : "Cadastrar"}
        </Button>
      </div>
    </div>
  );
}
