import React, { createContext, useState } from "react";
import { getEmployees } from "../../services/employee";
import { IEmployee } from "./../../interfaces/employee";

interface EmployeeContextData {
  loading: boolean;
  refreshEmployees(): void;
  data?: IEmployee[];
}
interface Props {
  children: JSX.Element;
}

const EmployeeContext = createContext<EmployeeContextData>(
  {} as EmployeeContextData
);

const EmployeeProvider: React.FC<Props> = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IEmployee[]>();

  const refreshEmployees = async () => {
    setLoading(true);
    const response = await getEmployees();
    console.log(response);
    setData(response?.data.employee);
    setLoading(false);
  };

  return (
    <EmployeeContext.Provider
      value={{
        loading,
        refreshEmployees,
        data,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
export { EmployeeProvider, EmployeeContext };
