import { v4 as uuid } from 'uuid';

let abastecimentos = [];

export const getAbastecimentos = (req, res) => {
    console.log(`Abastecimentos in the database: ${abastecimentos}`);

    res.send(abastecimentos);
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
        abastecimentos.push({...abastecimento, id: uuid()});
        console.log(`Abastecimento [${abastecimento.quantidadeLts}] Litros added to the database.`);
    }

    
};

export const relatorio = (req, res) => {
    console.log(`Abastecimentos in the database: ${abastecimentos}`);
    let abastecimentosVeiculo = [];

    foreach(abastecimento in abastecimentos)
    {
        if(req.idVeiculo === abastecimento.idVeiculo)
            abastecimentosVeiculo.push(abastecimento);
    }
    
    res.send(abastecimentosVeiculo);
}
