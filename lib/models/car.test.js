const exp = require('constants');
const fs = require('fs');
const pool = require('../utils/pool');
const Car = require('./car');

describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });

  it('created a car', async() => {
    const car = await Car.insert({ make:'ford', model:'F150', year: 1000 });

    expect(car).toEqual({ id: '1', make:'ford', model:'F150', year: 1000 });
  });

  it (' GET a car from the table by ID', async() => {
    await Car.insert({
      make: 'ford', 
      model: 'pink',
      year: 1900
    });
  
    const car = await Car.findById(1);
  
  
    expect(car).toEqual({
      id: expect.any(String),
      make: 'ford', 
      model: 'pink',
      year: 1900
    });
  });





  it('finds all cars', async() => {
    await Car.insert({
      make: 'ford', 
      model: 'pink',
      year: 1900
    });
  
    const car = await Car.getAllCars();
  
  
    expect(car).toEqual({
      id: expect.any(String),
      make: 'ford', 
      model: 'pink',
      year: 1900
    });
  });

  it('finds all cars', async() => {
    await Car.insert({
      make: 'ford', 
      model: 'pink',
      year: 1900
    });
  
    const car = await Car.updatesCar({ id:'1', make:'ford', model:'F150', year: 1000 });
  
  
    expect(car).toEqual({
      id: expect.any(String),
      make: 'ford', 
      model: 'pink',
      year: 1900
    });
  });









  afterAll(() => {
    return pool.end();
  });
});
