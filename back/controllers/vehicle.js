let vehicles = [];

export const getVehicles = (req, res) => {
  res.send({ success: true, vehicle: vehicles });
};

export const createVehicle = (req, res) => {
  const vehicle = req.body.params;
  const vehicleAux = { ...vehicle, idVeiculo: Date.now() };
  vehicles.push(vehicleAux);
  res.send({ sucess: true, vehicle: vehicleAux });
};

export const getVehicle = (req, res) => {
  res.send(req.params.id);
};

export const deleteVehicle = (req, res) => {
  vehicles = vehicles.filter((vehicle) => vehicle.id !== req.params.id);
};

export const updateVehicle = (req, res) => {
  const vehicle = vehicles.find((vehicle) => vehicle.id === req.params.id);

  vehicle.placa = req.body.placa;
  vehicle.descricao = req.body.descricao;
  vehicle.capacidadeTanque = req.body.capacidadeTanque;

  console.log(`vehicle has been updated`);
};
