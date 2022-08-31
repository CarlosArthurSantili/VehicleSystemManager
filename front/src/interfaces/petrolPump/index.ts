export interface ITypeGasoline {
  idGasolina: string;
  nome: string;
}

export interface IPetrolPump {
  idBomba: number;
  qtdEstoque: number;
  tipoCombustivel: ITypeGasoline | string;
  capacidadeBomba: number;
}

export interface IPetrolPumpRefuel {
  idBomba: number;
  preco:number;
  quantidadeLts:number;
}
