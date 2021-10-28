import airlinesModel from "../models/airlinesModels.js";
import HttpError from "http-errors";

// GET
const getAllplanes = (req, res, next) => {

  try {
    
    const airplanes = await airlinesModel.getAllAirlines();
    res.json(airplanes).status(200);

  } catch (error) {
    
    next(HttpError(400, {message: error.message}));
  }
  
};

export default {
  getAllplanes,
};
