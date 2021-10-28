import citiesModels from "../models/citiesModels.js";
import HttpError from "http-errors";

const allCities = (req, res, next) => {
try {
  const cities = await citiesModels.getAllCities();
  res.json(cities).status(200);

} catch (error) {
  next(HttpError(400, {message:error.message}));
}

  
};

export default {
  allCities,
};
