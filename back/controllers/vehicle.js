import { gasBombs, vehicles } from "./variables.js";

export const getVehicles = (req, res) => {
  res.send({ success: true, vehicle: vehicles });
};

export const createVehicle = (req, res) => {
  try {
    const vehicle = req.body.params;
    const vehicleAux = { ...vehicle, idVeiculo: Date.now() };
    vehicles.push(vehicleAux);
    res.send({ success: true, vehicle: vehicleAux });
  } catch (error) {
    res.status(400).send({ success: false, vehicle: {} });
  }
};

export const getVehicle = (req, res) => {
  try {
    const vehicle = vehicles.find(
      (vehicle) => vehicle.idVeiculo == req.params.id
    );
    res.send({ success: true, vehicle: vehicle });
  } catch (error) {
    res.status(400).send({ success: false, vehicle: {} });
  }
};

export const deleteVehicle = (req, res) => {
  try {
    const index = vehicles.findIndex(
      (vehicle) => vehicle.idVeiculo == req.params.id
    );
    vehicles.splice(index, 1);
    console.log(vehicles);

    res.send({ success: true });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

export const updateVehicle = (req, res) => {
  try {
    const vehicle = vehicles.find(
      (vehicle) => vehicle.idVeiculo == req.params.id
    );
    const index = vehicles.findIndex(
      (vehicle) => vehicle.idVeiculo == req.params.id
    );

    vehicle.placa = req.body.params.placa;
    vehicle.descricao = req.body.params.descricao;
    vehicle.capacidadeTanque = req.body.params.capacidadeTanque;

    console.log(vehicle);
    vehicles[index] = vehicle;

    res.send({ success: true, vehicle: vehicle });
  } catch (error) {
    res.status(400).send({ success: false, vehicle: {} });
  }
};

export const abastecer = (req, res) => {
  const abastecimento = req.body.params;
  const indexVehicle = vehicles.findIndex(
    (vehicle) => abastecimento.idVeiculo == vehicle.idVeiculo
  );
  const indexBomb = gasBombs.findIndex(
    (vehicle) => abastecimento.idBomba == vehicle.idBomba
  );

  if (abastecimento.quantidadeLts > vehicles[indexVehicle].capacidadeTanque) {
    res.status(200).send({
      success: true,
      message:
        "Quantidade de abastecimento invalido, nao ha capacidade para esse valor de combustivel!",
    });
  } else {
    gasBombs[indexBomb].qtdEstoque -= abastecimento.quantidadeLts;
    if (gasBombs[indexBomb].qtdEstoque < 0) {
      gasBombs[indexBomb].qtdEstoque = 0;
    }
    res.status(200).send({ success: true, message: "Abastecido com Sucesso" });
  }
};
