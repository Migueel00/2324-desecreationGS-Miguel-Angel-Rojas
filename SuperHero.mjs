import Character from "./Character.mjs";
import Die from "./Die.mjs";
import DieFactory from "./DieFactory.mjs";
import { DieID } from "./constants.mjs";

export default class SuperHero extends Character{
    constructor(name, hp, intelligence, strength, durability, speed, power, combat) {

        super(name, hp, intelligence, strength, durability, speed, power, combat);
    }

    attack(dieResult){
        if (dieResult >= 0 && dieResult <= 2) {
            // fallo
            const flumbleDamage = this.calculateFlumbleDamage(dieResult);
            return Math.floor(flumbleDamage);

        } else if (dieResult >= 3 && dieResult <= 17) {

            // exitoso
            const normalDamage = (this.power + this.strength) * dieResult/ 100;
            return Math.ceil(normalDamage);

        } else {

             // critico
            const normalDamage = (this.power + this.strength) * dieResult/ 100;
            const criticDamage = this.calculateCriticDamage(dieResult);

            const totalCriticDamage = normalDamage + criticDamage;
            return Math.ceil(totalCriticDamage);
        }
    }

    calculateCriticDamage(dieResult){
        let die3 = DieFactory.createDie(DieID.D3);
        let roll;
        let damage;

        switch(dieResult){
            case 18:
                roll    = die3.roll();
                damage  = ((this.intelligence * this.durability)/ 100 ) * roll;
                break;
            
            case 19:
                roll    = die3.roll() + die3.roll();
                damage  = ((this.intelligence * this.durability)/ 100 ) * roll;
                break;
            
            case 20:
                let die5    = DieFactory.createDie(DieID.D5);
                roll        = die5.roll() + die5.roll() + die5.roll();
                damage      = ((this.intelligence * this.durability)/ 100 ) * roll;
                break;
            
        }

        return damage;
    }
    
    calculateFlumbleDamage(dieResult){
        let die3 = DieFactory.createDie(DieID.D3);
        let roll;
        let damage;

        switch(dieResult){
            case 1:
                roll    = die3.roll();
                damage  = this.speed / roll; 
                break;

            case 2:
                roll    = die3.roll() + die3.roll() + die3.roll() + die3.roll();
                damage  = this.speed / roll;
                break;
        }

        return damage;
    }
}