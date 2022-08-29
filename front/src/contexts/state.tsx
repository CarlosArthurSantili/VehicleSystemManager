import React, { createContext, useState } from "react";
import { getVehicles } from "../services/vehicle";
import { IVehicle } from "./../interfaces/vehicle/index";

interface VehicleContextData {
  loading: boolean;
  refreshVehicles(): void
  data?:IVehicle[];
}
interface Props {
  children: JSX.Element;
}

const VehicleContext = createContext<VehicleContextData>(
  {} as VehicleContextData
);

const VehicleProvider: React.FC<Props> = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IVehicle[]>();

  const refreshVehicles = async () => {
    setLoading(true);
    const response = await getVehicles()
    setData(response?.data.vehicles);
    setLoading(false);
  };

  return (
    <VehicleContext.Provider
      value={{
        loading,
        refreshVehicles,
        data
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
export { VehicleProvider, VehicleContext };
