import { Response } from "../../interfaces/apiTypes";
import { IEmployee } from "../../interfaces/employee";
import { api } from "../api";

export async function getEmployees() {
  try {
    return api.get<Response<IEmployee[], "employee">>("/employee");
  } catch (error) {
    alert("Erro ao receber funcionarios");
  }
}
export async function getEmployee(id: number) {
  try {
    return api.get<Response<IEmployee, "employee">>(`/employee/${id}`);
  } catch (error) {
    alert("Erro ao receber funcionario");
  }
}

export async function createEmployee(data: IEmployee) {
  try {
    return api.post<Response<IEmployee, "employee">>("/employee", {
      params: data,
    });
  } catch (error) {
    alert("Erro ao cadastrar funcionario");
  }
}

export async function deleteEmployee(id: number) {
  try {
    return api.delete<Response<IEmployee, "employee">>(`/employee/${id}`);
  } catch (error) {
    alert("Erro ao receber funcionario");
  }
}

export async function updateEmployee(id: number, data: IEmployee) {
  try {
    return api.patch<Response<IEmployee, "employee">>(`/employee/${id}`, {
      params: data,
    });
  } catch (error) {
    alert("Erro ao receber funcionario");
  }
}
