import { Response } from "../../interfaces/apiTypes";
import { IVehicle, IVehicleRefuel } from "../../interfaces/vehicle";
import { api } from "../api";

export async function getVehicles() {
  try {
    return api.get<Response<IVehicle[], "vehicle">>("/vehicle");
  } catch (error) {
    alert("Erro ao receber veículos");
  }
}
export async function getVehicle(id: number) {
  try {
    return api.get<Response<IVehicle, "vehicle">>(`/vehicle/${id}`);
  } catch (error) {
    alert("Erro ao receber veículo");
  }
}

export async function createVehicle(data: IVehicle) {
  try {
    return api.post<Response<IVehicle, "vehicle">>("/vehicle", {
      params: data,
    });
  } catch (error) {
    alert("Erro ao cadastrar veículo");
  }
}

export async function deleteVehicle(id: number) {
  try {
    return api.delete<Response<IVehicle, "vehicle">>(`/vehicle/${id}`);
  } catch (error) {
    alert("Erro ao receber veículo");
  }
}

export async function updateVehicle(id: number, data: IVehicle) {
  try {
    return api.patch<Response<IVehicle, "vehicle">>(`/vehicle/${id}`, {
      params: data,
    });
  } catch (error) {
    alert("Erro ao receber veículo");
  }
}

export async function refuelVehicleAPI(data: IVehicleRefuel) {
  try {
    return api.post<Response<IVehicleRefuel, "message">>(`/refuelVehicle/`, {
      params: data,
    });
  } catch (error) {
    alert("Erro ao receber bomba");
  }
}
