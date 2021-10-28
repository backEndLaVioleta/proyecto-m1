import airports from "../data/airports.js";

class AirportsModel {
  // GET
  getAllAirports() {
    return Promise.resolve(airports);
  }
}

export default new AirportsModel();
