export interface ITypeGasoline {
  idGasolina: number;
  nome: string;
}

export interface IPetrolPump {
  idBomba: number;
  qtdEstoque: number;
  tipoCombustivel: ITypeGasoline;
  capacidadeBomba: number;
}
