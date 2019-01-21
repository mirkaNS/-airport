import Flight from "./entities/Flight.js";
import Passenger from "./entities/Passenger.js";
import Pilot from "./entities/Pilot.js";
import Luggage from "./entities/Luggage.js";

const createFlight = (flightName, listOfPassenger, capacity) => {
    try{
      return new Flight (flightName, listOfPassenger, capacity);
    } catch{
        console.log('Error')
    }
}
const createPassenger = (name, surname, weight, luggage) => {
    try {
        const onFly = Math.random() <= 0.3;
        return new Passenger(name, surname, weight, onFly, luggage);
    } catch {
        console.log('Error');
    }  
}
const createPilot = (weight) => {
    try{
        const license = Math.random() >= 0.05;
         return  new Pilot(weight, license);
    }catch{
        console.log('Error')
    }
}
const createLuggage = (weight) =>{
    try{
       return new Luggage(weight);
    }catch{
        console.log('Error')
    }
}
export{
    createFlight,
    createLuggage,
    createPassenger,
    createPilot
}