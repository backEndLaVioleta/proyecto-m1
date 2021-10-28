import airlines from "../data/airlines.js";

// new Class
class ArilinesModel {
  // GET
  getAllAirlines() {
    return Promise.resolve(airlines);
  }
}
export default new ArilinesModel();
