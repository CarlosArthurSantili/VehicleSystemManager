import { ChangeEvent, useMemo, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { IEmployee } from "../../../../interfaces/employee";
import { IVehicle } from "../../../../interfaces/vehicle";

export function FormRefuelVehicle() {
  const [employer, setEmployeer] = useState<string>("");
  const [vehicle, setVehicle] = useState<string>("");
  const [refuel, setRefuel] = useState<string>("");

  const onChangeSelectEmployee = (e: ChangeEvent<HTMLSelectElement>) => {
    setEmployeer(e.target.value);
  };
  const onChangeSelectVehicle = (e: ChangeEvent<HTMLSelectElement>) => {
    setVehicle(e.target.value);
  };
  const onChangeInputRefuel = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 6) setRefuel(e.target.value);
  };

  const employees: IEmployee[] = [];

  const optionsSelectEmployees = useMemo(() => {
    return employees.map((x) => {
      return { id: x.idFuncionario, name: x.nome };
    });
  }, [employees]);

  const vehicles: IVehicle[] = [];

  const optionsSelectVehicles = useMemo(() => {
    return vehicles.map((x) => {
      return { id: x.idVeiculo, name: x.placa };
    });
  }, [vehicles]);
  return (
    <div className="group">
      <div className="groupInputs">
        <Select
          label={"Funcionário"}
          onChange={onChangeSelectEmployee}
          value={employer}
          options={optionsSelectEmployees}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <Select
          label={"Veiculo"}
          onChange={onChangeSelectVehicle}
          value={vehicle}
          options={optionsSelectVehicles}
          style={{ width: "100%", marginBottom: 10 }}
        />
        <Input
          placeholder="Litros"
          label={"Litros"}
          value={refuel}
          type={"number"}
          maxLength={4}
          onChange={onChangeInputRefuel}
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
