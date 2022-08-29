import { v4 as uuid } from 'uuid';

let gasBombs = [];

export const getGasBombs = (req, res) => {
    console.log(`GasBombs in the database: ${gasBombs}`);

    res.send(gasBombs);
}

export const createGasBomb = (req, res) => {   
    const gasBomb = req.body;

    gasBombs.push({...gasBomb, id: uuid()});
    
    console.log(`GasBomb [${gasBomb.gasBombname}] added to the database.`);
};

export const getGasBomb = (req, res) => {
    res.send(req.params.id)
};

export const deleteGasBomb = (req, res) => { 
    console.log(`gasBomb with id ${req.params.id} has been deleted`);
    
    gasBombs = gasBombs.filter((gasBomb) => gasBomb.id !== req.params.id);
};

export const updateGasBomb =  (req,res) => {
    const gasBomb = gasBombs.find((gasBomb) => gasBomb.id === req.params.id);
    
    gasBomb.gasBombname = req.body.gasBombname;
    gasBomb.age = req.body.age;

    console.log(`gasBombname has been updated to ${req.body.gasBombname}.age has been updated to ${req.body.age}`)
};