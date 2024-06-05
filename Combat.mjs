export default class Combat{
    constructor(superHero, villain, die) {
        this.superHero = superHero;
        this.villain   = villain;
        this.die       = die;
        this.turns     = [];
    }

    execute(){
        this.assignFirstTurn();

        console.log("El primer asalto es para " + this.turns[0].name);

    }

    assignFirstTurn(){
        const scoreHero     = this.superHero.intelligence + this.superHero.combat;
        const scoreVillain  = this.villain.intelligence + this.villain.combat;

        this.turns = scoreHero > scoreVillain ? [this.superHero, this.villain] : [this.villain, this.superHero];
    }

    attackSuccesfullOrFlumble(){

    }

    attackDamage(){
        
    }
}