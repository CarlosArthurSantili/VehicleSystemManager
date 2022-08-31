import { Response } from "../../interfaces/apiTypes";
import { IPetrolPump, IPetrolPumpRefuel } from "../../interfaces/petrolPump";
import { api } from "../api";

export async function getPetrolPumps() {
  try {
    return api.get<Response<IPetrolPump[], "gasBomb">>("/gasBomb");
  } catch (error) {
    alert("Erro ao receber bombas");
  }
}
export async function getPetrolPump(id: number) {
  try {
    return api.get<Response<IPetrolPump, "gasBomb">>(`/gasBomb/${id}`);
  } catch (error) {
    alert("Erro ao receber bomba");
  }
}

export async function createPetrolPump(data: IPetrolPump) {
  try {
    return api.post<Response<IPetrolPump, "gasBomb">>("/gasBomb", {
      params: data,
    });
  } catch (error) {
    alert("Erro ao cadastrar bomba");
  }
}

export async function deletePetrolPump(id: number) {
  try {
    return api.delete<Response<IPetrolPump, "gasBomb">>(`/gasBomb/${id}`);
  } catch (error) {
    alert("Erro ao receber bomba");
  }
}

export async function updatePetrolPump(id: number, data: IPetrolPump) {
  try {
    return api.patch<Response<IPetrolPump, "gasBomb">>(`/gasBomb/${id}`, {
      params: data,
    });
  } catch (error) {
    alert("Erro ao receber bomba");
  }
}
export async function refuelPetrolPump(id: number, data: IPetrolPumpRefuel) {
  try {
    return api.patch<Response<IPetrolPumpRefuel, "message">>(`/refuelGasBomb/${id}`, {
      params: data,
    });
  } catch (error) {
    alert("Erro ao receber bomba");
  }
}
