import { Response } from "../../interfaces/apiTypes";
import { IVehicle } from "../../interfaces/vehicle";
import { api } from "../api";
import { AxiosResponse } from "axios";

export async function getVehicles() {
  try {
    return new Promise<AxiosResponse<Response<IVehicle[], "vehicles">>>(
      (resolve, reject) => {
        setTimeout(() => {
          resolve({
            data: {
              success: true,
              vehicles: [
                {
                  idVeiculo: 1,
                  capacidadeTanque: 14,
                  descricao: "R3 Azul",
                  placa: "ABC1234",
                },
                {
                  idVeiculo: 2,
                  capacidadeTanque: 8,
                  descricao: "Biz da GeovannaGeovannaGeovannaGeovannaGeovannaGeovannaGeovanna",
                  placa: "ABC1234",
                },
              ],
            },
          } as AxiosResponse<Response<IVehicle[], "vehicles">>);
        }, 2000);
      }
    );
    return api.get<Response<IVehicle[], "vehicles">>("/vehicles");
  } catch (error) {
    alert("Erro ao receber veículos");
  }
}
