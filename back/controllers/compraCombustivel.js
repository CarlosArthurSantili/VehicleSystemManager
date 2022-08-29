import { v4 as uuid } from 'uuid';

let compras = [];

export const getCompras = (req, res) => {
    console.log(`Compras in the database: ${staffs}`);

    res.send(compras);
}

export const getCompra = (req, res) => {
    res.send(req.params.id)
};

export const comprarCombustivel = (req,res) => {
    const gasBomb = 
    gasBombs.find((gasBomb) => gasBomb.id === req.params.id);
    const litrosCombustivel = res.body.litrosCombustivel;

    if (litrosCombustivel + gasBomb.qtdEstoque > gasBomb.capacidadeBomba)
    {
        return res.status(400).send({
            message: 'Valor de combustivel invalido, nao ha capacidade para esse valor de combustivel!'
         });
    }
    else
    {
        gasBomb.qtdEstoque += litrosCombustivel;
        console.log(`gasBombname has been updated`)
    }
};