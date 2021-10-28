import airportsModel from "../models/airportsModels.js";
import HttpError from "http-errors";

// GET
const allAirports = (req, res, next) => {

  try {
    
    const airports = await airportsModel.getAllAirports();
    res.json(airports).status(200);

  } catch (error) {

    next(HttpError(400, {message: error.message}));

  }
  
};

export default {
  allAirports,
};
