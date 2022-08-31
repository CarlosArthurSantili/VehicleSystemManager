import { v4 as uuid } from "uuid";
import { gasBombs } from "./variables.js";

let compras = [];

export const getCompras = (req, res) => {
  console.log(`Compras in the database: ${staffs}`);

  res.send(compras);
};

export const getCompra = (req, res) => {
  res.send(req.params.id);
};

export const comprarCombustivel = (req, res) => {
  const index = gasBombs.findIndex(
    (gasBomb) => gasBomb.idBomba === req.body.params.idBomba
  );

  const litrosCombustivel = req.body.params.quantidadeLts;

  if (
    litrosCombustivel + gasBombs[index].qtdEstoque >
    gasBombs[index].capacidadeBomba
  ) {
    res.status(200).send({
      success: true,
      message:
        "Valor de combustivel invalido, nao ha capacidade para esse valor de combustivel!",
    });
  } else {
    gasBombs[index].qtdEstoque += litrosCombustivel;
    res
      .status(200)
      .send({ success: true, message: "Compra feita com sucesso!" });
  }
};
