import cities from "../data/cities.js";

class CitiesModel {
  // GET
  getAllCities() {
    return Promise.resolve(cities);
  }
}
export default new CitiesModel();
