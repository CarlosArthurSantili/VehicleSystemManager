import { v4 as uuid } from 'uuid';

let staffs = [];

export const getStaffs = (req, res) => {
    console.log(`Staffs in the database: ${staffs}`);

    res.send(staffs);
}

export const createStaff = (req, res) => {   
    const staff = req.body;

    staffs.push({...staff, id: uuid()});
    
    console.log(`Staff [${staff.staffname}] added to the database.`);
};

export const getStaff = (req, res) => {
    res.send(req.params.id)
};

export const deleteStaff = (req, res) => { 
    console.log(`staff with id ${req.params.id} has been deleted`);
    
    staffs = staffs.filter((staff) => staff.id !== req.params.id);
};

export const updateStaff =  (req,res) => {
    const staff = staffs.find((staff) => staff.id === req.params.id);
    
    staff.staffname = req.body.staffname;
    staff.age = req.body.age;

    console.log(`staffname has been updated to ${req.body.staffname}.age has been updated to ${req.body.age}`)
};