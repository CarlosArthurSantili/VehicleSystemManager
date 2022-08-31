import { gasBombs } from "./variables.js";

export const getGasBombs = (req, res) => {
  res.send({ success: true, gasBomb: gasBombs });
};

export const createGasBomb = (req, res) => {
  try {
    const gasBomb = req.body.params;
    const gasBombsAux = { ...gasBomb, idBomba: Date.now() };
    gasBombs.push(gasBombsAux);
    res.send({ success: true, gasBomb: gasBombsAux });
  } catch (error) {
    res.status(400).send({ success: false, gasBomb: {} });
  }
};

export const getGasBomb = (req, res) => {
  try {
    const gasBomb = gasBombs.find(
      (gasBomb) => gasBomb.idBomba == req.params.id
    );
    res.send({ success: true, gasBomb: gasBomb });
  } catch (error) {
    res.status(400).send({ success: false, gasBomb: {} });
  }
};

export const deleteGasBomb = (req, res) => {
  try {
    const index = gasBombs.findIndex(
      (gasBomb) => gasBomb.idBomba == req.params.id
    );
    gasBombs.splice(index, 1);
    console.log(gasBombs);

    res.send({ success: true });
  } catch (error) {
    res.status(400).send({ success: false });
  }
};

export const updateGasBomb = (req, res) => {
  try {
    const gasBomb = gasBombs.find(
      (gasBomb) => gasBomb.idBomba == req.params.id
    );
    const index = gasBombs.findIndex(
      (gasBomb) => gasBomb.idBomba == req.params.id
    );

    gasBomb.qtdEstoque = req.body.params.qtdEstoque;
    gasBomb.capacidadeBomba = req.body.params.capacidadeBomba;
    gasBomb.tipoCombustivel = req.body.params.tipoCombustivel;

    gasBombs[index] = gasBomb;

    res.send({ success: true, gasBomb: gasBomb });
  } catch (error) {
    res.status(400).send({ success: false, gasBomb: {} });
  }
};
