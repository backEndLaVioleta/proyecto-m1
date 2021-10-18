import routes from '../../data/routes.js';
import model from '../../models/sixCitiesModels.js';
import {expect, jest} from '@jest/globals';

const mockRoutes = [{
    "departure_airport_iata": "BCN",
    "arrival_airport_iata": "CMN"
}];

test('getRouteSelected should return mockRoutes with origen="BCN"', ()=>{
    const spyRoutes = jest.spyOn(routes, 'filter').mockImplementation(()=>mockRoutes);
    const result = await model.getRouteSelected('BCN', '');

    expect(spyRoutes).toHaveBeenCalled();
    expect(result).toBe(mockRoutes);
})