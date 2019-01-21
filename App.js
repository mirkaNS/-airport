import * as data from './data.js'
const App=()=>{
const luggage1 = data.createLuggage(4);
const luggage2 = data.createLuggage(3);
const luggage3 = data.createLuggage(4);
const luggage4 = data.createLuggage(1);
const luggage5 = data.createLuggage(1);
const luggage6 = data.createLuggage(2);
const luggage7 = data.createLuggage(2);
const luggage8 = data.createLuggage(3);
const luggage9 = data.createLuggage(1);
const luggage10 = data.createLuggage(1); 

const passenger1 = data.createPassenger("Mirka", "Mirkic", 55, luggage1);
const passenger2 = data.createPassenger("Marko", "Markic", 75, luggage2);
const passenger3 = data.createPassenger("Pera", "Peric", 85, luggage3);
const passenger4 = data.createPassenger("Ivica", "Ivic", 87, luggage4);
const passenger5 = data.createPassenger("Mira", "Miric", 105, luggage5);
const passenger6 = data.createPassenger("Nikola", "Nikolic", 55, luggage6);
const passenger7 = data.createPassenger("Jovan", "Jovanic", 95, luggage7);
const passenger8 = data.createPassenger("Zika", "Mirkicikic", 95, luggage8);
const passenger9 = data.createPassenger("Masa", "Masic", 67, luggage9);
const passenger10 = data.createPassenger("Milica", "Milicic", 55, luggage10);
const pilot1 = data.createPilot(80);
const pilot2 = data.createPilot(90);
const flight = data.createFlight("Belgrade-Berlin", [], 20);
flight.addPasinger(passenger1);
flight.addPasinger(passenger2);
flight.addPasinger(passenger3);
flight.addPasinger(passenger4);
flight.addPasinger(passenger5);
flight.addPasinger(passenger6);
flight.addPasinger(passenger7);
flight.addPasinger(passenger8);
flight.addPasinger(passenger9);
flight.addPasinger(passenger10);
const weight = flight.getLostLuggageWeight();
console.log(weight);
}
App()
export default App;