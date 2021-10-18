import countriesModels from "../models/countriesModels.js";
import HttpError from "http-errors";

const allCountries = async (req, res, next) => {
  try {
    const countries = await countriesModels.getAllCountries();
    res.json(countries).status(200);
    
  } catch (error) {
    next(HttpError(400, {message: error.message}))
  }
  
};

export default {
  allCountries,
};
