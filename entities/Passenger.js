class Passenger{
    constructor(name, surname, weight, noFly, luggage){
        this.name = name;
        this.surname = surname;
        this.weight = this.setWeight(weight);
        this.noFly = this.setNoFly(noFly);
        this.luggage = luggage;
    }
    setWeight(weight){
        if(weight > 20 && weight < 100){
            this.weight = weight;
        }else{
            throw ('Passenger weight is greater than 100kg');  
        }
    }
    setNoFly(noFly){
        if(noFly == false){
            this.notFly=noFly;
        }else{
            throw new Error('The passenger is on not Fly list!');
            
        }
    }
    toString(){
        console.log(`Name: ${this.name},
                    Surname: ${this.surname},
                    Weight: ${this.weight},
                    `);
                    if (this.luggage) {
                        this.luggage.toString();
                    }else{
                        console.log(`The passiger does not have luggage!`)
                    }
        
    }
}
export default Passenger;