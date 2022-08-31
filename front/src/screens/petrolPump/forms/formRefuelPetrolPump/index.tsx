import { ChangeEvent, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { refuelPetrolPump } from "../../../../services/petrolPump";

interface Props {
  callback():void
  idPetrolPump?: number;
}

export function FormRefuelPetrolPump({idPetrolPump, callback}:Props) {
  const [refuel, setRefuel] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const onChangeInputRefuel = (e: ChangeEvent<HTMLInputElement>) => {
    setRefuel(e.target.value);
  };

  const onChangeInputPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  async function RefuelPetrolPump() {
    if(idPetrolPump){
      const response = await refuelPetrolPump(idPetrolPump,{
         idBomba: idPetrolPump,
         quantidadeLts: Number(refuel),
         preco:Number(price),
       });
       if(response?.data.success){
         alert(response?.data.message)
         callback()
       }
    }
  }

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
        onClick={RefuelPetrolPump}
      >
        Abastecer
      </Button>
    </div>
  );
}
