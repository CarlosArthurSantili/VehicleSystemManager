import { v4 as uuid } from "uuid";

let employees = [];

export const getEmployees = (req, res) => {
  res.send({ success: true, employee: employees });
};

export const createEmployee = (req, res) => {
  try {
    const employee = req.body.params;
    const employeesAux = { ...employee, idFuncionario: Date.now() };
    employees.push(employeesAux);
    res.send({ success: true, employee: employeesAux });
  } catch (error) {
    res.status(400).send({ success: false, employee: {} });
  }
};

export const getEmployee = (req, res) => {
  try {
    const employee = employees.find(
      (employee) => employee.idFuncionario == req.params.id
    );
    res.send({ success: true, employee: employee });
  } catch (error) {
    res.status(400).send({ success: false, employee: {} });
  }
};

export const deleteEmployee = (req, res) => {
  try {
    const index = employees.findIndex(
      (employee) => employee.idFuncionario == req.params.id
    );
    employees.splice(index, 1);
    console.log(employees);

    res.send({ success: true });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

export const updateEmployee = (req, res) => {
  try {
    const employee = employees.find(
      (employee) => employee.idFuncionario == req.params.id
    );
    const index = employees.findIndex(
      (employee) => employee.idFuncionario == req.params.id
    );

    employee.nome = req.body.params.nome;
    employee.cpf = req.body.params.cpf;

    employees[index] = employee;

    res.send({ success: true, employee: employee });
  } catch (error) {
    res.status(400).send({ success: false, employee: {} });
  }
};
