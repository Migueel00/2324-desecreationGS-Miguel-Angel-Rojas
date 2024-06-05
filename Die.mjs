import { DieID } from "./constants.mjs";

export default class Die {

    constructor(faces){

        this.values = [3, 5, 20, 100];
        this.faces   = faces;
    }

    static createD3(){
        const faces = 3;

        return new Die(faces);
    }

    static createD5(){
        const faces = 5;

        return new Die(faces);
    }   

    static createD20(){
        const faces = 20;

        return new Die(faces);
    }

    static createD100(){
        const faces = 100;

        return new Die(faces);
    }



    roll(){
        const roll = Math.floor(Math.random() * this.faces + 1);

        return roll;
    }
}