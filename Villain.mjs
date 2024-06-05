import Character from "./Character.mjs";
import DieFactory from "./DieFactory.mjs";
import { DieID } from "./constants.mjs";

export default class Villain extends Character{
    constructor(name, hp, intelligence, strength, durability, speed, power, combat) {

        super(name, hp, intelligence, strength, durability, speed, power, combat);
    }

    attack(dieResult){
    
        if (dieResult >= 1 && dieResult <= 17) {

            // exitoso
            return normalDamage = (this.power + this.strength) * dieResult/ 100;

        } else {
            
             // critico
            const normalDamage = (this.power + this.strength) * dieResult/ 100;
            const criticDamage = this.calculateCriticDamage(dieResult);

            const totalCriticDamage = normalDamage + criticDamage;
            return totalCriticDamage;
        }
    }

    calculateCriticDamage(dieResult){
        let die3 = DieFactory.createDie(DieID.D3);
        let roll;
        let damage;

        switch(dieResult){
            case 18:
                roll    = die3.roll + die3.roll;
                damage  = ((this.intelligence * this.durability)/ 100 ) * roll;
                break;
            
            case 19:
                roll    = die3.roll + die3.roll + die3.roll;
                damage  = ((this.intelligence * this.durability)/ 100 ) * roll;
                break;
            
            case 20:
                let die5    = DieFactory.createDie(DieID.D5);
                roll        = die5.roll + die5.roll + die5.roll + die5.roll;
                damage  = ((this.intelligence * this.durability)/ 100 ) * roll;
                break;
            
        }

        return damage;
    }
    
}
