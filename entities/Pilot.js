import { HasNoLicence } from "../exeption/hasNoLicence.js";

class Pilot{
    constructor(weight, license){
        this.weight = weight;
        this.license = this.checkLicence(license);
    }
    checkLicence(license){
        if(license){
            this.license=license
        }else{
            throw new HasNoLicence();
        }
    }
}
export default Pilot;