// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces

import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // TODO: Create a constructor that accepts the properties of the Truck class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
  // TODO: The constructor should initialize the properties of the Truck class
  // TODO: Get the make an model of the vehicle if it exists
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {

    super();
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not

    

    if (wheels.length < 4) {
      this.wheels = Array.from({ length: 4 }, () => new Wheel());
    } else {
      this.wheels = wheels;
    }


    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicle.make} ${vehicle.model} is being towed.`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed.`);
    }
  }
  // TODO: The method should call the printDetails method of the parent class
  // Override the printDetails method from the Vehicle class

  override printDetails(): void {
    super.printDetails();
    console.log(`Truck Details: VIN: ${this.vin}, Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity}, Wheels: ${this.wheels.length}`);
  }
}

// Export the Truck class as the default export
export default Truck;













