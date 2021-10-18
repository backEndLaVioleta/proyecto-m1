import adminModel from "../models/adminModel.js";
 import  HttpError  from "http-errors";

//GET  
const getList = (req, res, next) =>{
    try {
        const users = await adminModel.getAllUsers();
        res.json((users)).status(200);

    } catch (error) {
        next(HttpError(400, {message:error.message}));
    }
    
};

//POST  
const removeOne = (req, res, next) =>{
try {
    const body=req.body;

    if(!body.userId){

      next(HttpError(401, {message: "id user invalid!"}));

    } else{

    const userRemove= await adminModel.getOneUserById(body.userId);

    res.json(userRemove).status(200);
    }

} catch (error) {
    
    next(HttpError(400, {message: error.message})); 
}


}

export default {
    getList,
    removeOne
}