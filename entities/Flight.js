class Flight{
    constructor(flightName, listOfPassenger, capacity){
        this.flightName = flightName;
        this.listOfPassenger = listOfPassenger;
        this.capacity = capacity;
    }
    addPassenger(passenger){
        if(this.listOfPassenger.length < capacity){
            this.listOfPassenger.push(passenger);
        }else{
            throw new Error("The number of passengers is biger then capacity!");
        }
    }
    getLostLuggageWeight() {
        let sum = 0;
        for(let i=0; i<this.listOfPassenger.length;i++){
            if(this.listOfPassenger[i].luggage.lostLuggage === true) {
                sum+=this.listOfPassenger[i].luggage.weight;
            }
        }
        return sum;
    }
}
export default Flight;
