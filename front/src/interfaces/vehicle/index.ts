export interface IVehicle {
  descricao: string;
  idVeiculo: number;
  placa: string;
  capacidadeTanque: number;
}

export interface IVehicleRefuel {
  idBomba: number;
  idFuncionario: number;
  idVeiculo: number;
  quantidadeLts: number;
}
