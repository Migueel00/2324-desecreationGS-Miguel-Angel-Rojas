import { DieID } from "./constants.mjs";

export default class Combat{
    constructor(superHero, villain, die) {
        this.superHero = superHero;
        this.villain   = villain;
        this.die       = die;
        this.turns     = [];
        this.activeTurn      = 0;
        this.turnCounter     = 1;
    }

    execute(){
        this.assignFirstTurn();

        console.log("El primer asalto es para " + this.turns[0].name);

        while(this.superHero.hp >= 0 && this.villain.hp >= 0){
            console.log("--------------------------");
            console.log("Comienza el asalto " + this.turnCounter);

            const attackSuccess = this.attackSuccesfullOrFlumble();

            if(!attackSuccess){
    
                
                console.log("El ataque de " + this.turns[this.activeTurn].name + " ha fallado" );
                
                this.changeTurn();
    
            }else{
    
                console.log("El ataque de " + this.turns[this.activeTurn].name + " ha sido exitoso");
                this.attackDamage();
                this.changeTurn();
    
            }

            console.log("------------------------");
            console.log(this.superHero);
            console.log(this.villain);
            console.log("------------------------");
        }


    }

    assignFirstTurn(){
        const scoreHero     = this.superHero.intelligence + this.superHero.combat;
        const scoreVillain  = this.villain.intelligence + this.villain.combat;

        this.turns = scoreHero > scoreVillain ? [this.superHero, this.villain] : [this.villain, this.superHero];
    }

    attackSuccesfullOrFlumble(){

        const roll = this.die[DieID.D100].roll();

        console.log(this.turns[this.activeTurn].name + " saca: " + roll);

        if(roll >= this.turns[this.activeTurn].combat){


            return false;
        }

        return true;

        // return true = ataque fallido , false = ataque exitoso -> aplicar daño
    }

    attackDamage(){
        
        const roll = this.die[DieID.D20].roll();

        const damage = this.turns[this.activeTurn].attack(roll);

        if(this.turns[this.activeTurn].name  !== 'Junkpile' && roll <= 3){
            console.log(this.turns[this.activeTurn].name + " obtiene un " + roll + " Falla catastroficamente y se autoinflije un daño de " + damage + " puntos ");
            this.superHero.hp -= damage;
        }else{
            console.log(this.turns[this.activeTurn].name + " obtiene un " + roll + ", empuña su arma y ejerce un daño de " + damage + " puntos ");
            this.activeTurn === 0 ? this.turns[this.activeTurn + 1].hp -= damage : this.turns[this.activeTurn - 1].hp -= damage; 
        }
    }


    changeTurn(){
        this.activeTurn === 0 ? this.activeTurn += 1 : this.activeTurn -= 1;

        this.turnCounter++;
    }
}