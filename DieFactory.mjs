import Die from "./Die.mjs";
import { DieID } from "./constants.mjs";

export default class DieFactory{
    constructor() {
        
    }

    static createDie(type){
        let die;

        switch(type){
            case DieID.D3:
                die = Die.createD3();
                break;

            case DieID.D5:
                die = Die.createD5();            
                break;

            case DieID.D20:
                die = Die.createD20();
                break;

            case DieID.D100:
                die = Die.createD100();
                break;
        }

        return die;
    }
}