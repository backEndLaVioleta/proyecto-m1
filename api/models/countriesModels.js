import countries from "../data/countries.js";

class CountriesModel {
    // GET
  getAllCountries() {
    return Promise.resolve(countries);
  }
}
export default new CountriesModel();
