import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { Select } from "../../../../components/Select";
import { useEmployee } from "../../../../hooks/useEmployee";
import { useVehicles } from "../../../../hooks/useVehicles";
import { IEmployee } from "../../../../interfaces/employee";
import { IVehicle } from "../../../../interfaces/vehicle";
import { refuelVehicleAPI } from "../../../../services/vehicle";

interface Props {
  callback(): void
  idPetrolPump?: number;
}
export function FormRefuelVehicle({ idPetrolPump, callback }: Props) {
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

  const { data: employees, refreshEmployees } = useEmployee();
  const { data: vehicles, refreshVehicles } = useVehicles();

  const optionsSelectEmployees = useMemo(() => {
    setEmployeer(String(employees?employees[0]?.idFuncionario:''))
    return employees?.map((x) => {
      return { id: x.idFuncionario, name: x.nome };
    });
  }, [employees]);

  const optionsSelectVehicles = useMemo(() => {
    setVehicle(String(vehicles?vehicles[0]?.idVeiculo:''))
    return vehicles?.map((x) => {
      return { id: x.idVeiculo, name: x.placa };
    });
  }, [vehicles]);

  useEffect(() => {
    refreshEmployees();
    refreshVehicles();
  }, []);

  async function RefuelVehicle() {
    if(idPetrolPump){
      const response = await refuelVehicleAPI({
         idBomba: idPetrolPump,
         idFuncionario: Number(employer),
         idVeiculo: Number(vehicle),
         quantidadeLts: Number(refuel),
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
        onClick={RefuelVehicle}
      >
        Abastecer
      </Button>
    </div>
  );
}
