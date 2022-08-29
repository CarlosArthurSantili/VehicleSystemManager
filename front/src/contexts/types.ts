export interface Prices{
    opening:number;
    low:number;
    high:number;
    closing:number;
    pricedAt:string;
    volume:number
}

export interface Strock {
  name: string;
  lastPrice: number;
  priceAt: string;
  prices?: Prices[];
}

export interface SimulationStrock {
  name:string;
  lastPrice:number;
  priceAtDate:number;
  purchasedAmount:number;
  purchasedAt:string;
  capitalGains:number;
}
