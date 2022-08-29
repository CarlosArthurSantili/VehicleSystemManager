import { ChangeEvent, useMemo, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { ITypeGasoline } from "../../../../interfaces/petrolPump";

interface Props {
  idPetrolPump?: number;
}
export function InfosPetrolPump({ idPetrolPump }: Props) {
  const [typeGasoline, setTypeGasoline] = useState<string>("");
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
      { idGasolina: 1, nome: "etanol" },
      { idGasolina: 2, nome: "Diesel" },
    ];
  }, []);

  const optionsSelect = useMemo(() => {
    return typesGasoline.map((x) => {
      return { id: x.idGasolina, name: x.nome };
    });
  }, [typesGasoline]);

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
          {idPetrolPump ? "Editar" : "Cadastrar"}
        </Button>
      </div>
    </div>
  );
}
