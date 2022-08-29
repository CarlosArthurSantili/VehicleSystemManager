import { ChangeEvent, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

export function FormRefuelPetrolPump() {
  const [refuel, setRefuel] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const onChangeInputRefuel = (e: ChangeEvent<HTMLInputElement>) => {
    setRefuel(e.target.value);
  };

  const onChangeInputPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  return (
    <div className="group">
      <div className="groupInputs">
        <Input
          placeholder="Quantidade de Litros"
          label={"Quantidade de Litros"}
          value={refuel}
          type={"number"}
          maxLength={4}
          onChange={onChangeInputRefuel}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <Input
          placeholder="Preço"
          label={"Preço"}
          value={price}
          type={"number"}
          maxLength={3}
          onChange={onChangeInputPrice}
          style={{ width: "100%", marginBottom: 10 }}
        />
      </div>
      <Button
        type="button"
        style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
        onClick={() => {}}
      >
        Abastecer
      </Button>
    </div>
  );
}
