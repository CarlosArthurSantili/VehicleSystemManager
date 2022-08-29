import { v4 as uuid } from 'uuid';

let gasBombs = [];

export const getAbastecimentos = (req, res) => {
    console.log(`Abastecimentos in the database: ${staffs}`);

    res.send(staffs);
}

export const getAbastecimento = (req, res) => {
    res.send(req.params.id)
};

export const abastecer = (req,res) => {
    const abastecimento = req.body;
    const vehicle = req.bodfind((gasBomb) => gasBomb.id === req.params.id);

    if (abastecimento.quantidadeLts > vehicle.capacidadeTanque)
    {
        return res.status(400).send({
            message: 'Quantidade de abastecimento invalido, nao ha capacidade para esse valor de combustivel!'
         });
    }
    else
    {
        staffs.push({...abastecimento, id: uuid()});
        console.log(`Abastecimento [${abastecimento.quantidadeLts}] Litros added to the database.`);
    }

    
};