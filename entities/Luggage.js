class Luggage{
    constructor(weight){
        this.weight = this.setLuggageWeight(weight);
        this.handLuggage = this.getHandLuggage(weight);
    }
    setLuggageWeight(weight){
        if(weight >= 1 && weight <= 5){
            this.weight = weight;
        }else{
            throw new Error('Passenger luggage is greater than 5kg');
            
        }
    }
    getHandLuggage(weight){

        if(weight > 2){
            this.lostLuggage= Math.random() > 0.1;
            return false;
        }
        
        this.lostLuggage= Math.random() > 0.3;
        return true;
    }
    toString(){
        console.log(`Weight: ${this.weight},
                    Hand Luggage: ${this.handLuggage ? "Yes":"No"},
                    Lost Luggage: ${this.lostLuggage ? "Yes":"No"}`)
    }

}
export default Luggage;