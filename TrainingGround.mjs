import SuperHero from "./SuperHero.mjs";
import Villain from "./Villain.mjs";

export default class TraininGround{
    constructor(data){
        this.data = data;
    }

    createSuperHero(){

        for(let i = 0; i < this.data.length; i++){
            const random    = Math.floor(Math.random() * this.data.length);

            if(this.data[random].name !== 'Junkpile'){

                const name          = this.data[random].name;
                const intelligence  = this.data[random].powerstats.intelligence;
                const strength      = this.data[random].powerstats.strength;
                const durability    = this.data[random].powerstats.durability;
                const speed         = this.data[random].powerstats.speed;
                const combat        = this.data[random].powerstats.combat;
                const power         = this.data[random].powerstats.power;
        
                let hp            = strength * 10;
                if(hp > 666){
                    hp = 666;
                }

                return new SuperHero(name, hp, intelligence, strength, durability, speed, power, combat);
                
            }
        }
    }

    createVillain(){
        for(let i = 0; i < this.data.length; i++){

            if(this.data[i].name === 'Junkpile'){
                const name          = this.data[i].name;
                const intelligence  = this.data[i].powerstats.intelligence;
                const strength      = this.data[i].powerstats.strength;
                const durability    = this.data[i].powerstats.durability;
                const speed         = this.data[i].powerstats.speed;
                const combat        = this.data[i].powerstats.combat;
                const power         = this.data[i].powerstats.power;

                let hp            = strength * 10;
                
                if(hp > 666){
                    hp = 666;
                }

                return new Villain(name, hp, intelligence, strength, durability, speed, power, combat);
            }
        }    
    }
    
}
