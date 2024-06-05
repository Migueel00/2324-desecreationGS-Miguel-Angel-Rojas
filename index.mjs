import DieFactory from "./DieFactory.mjs";
import { DieID } from "./constants.mjs";
import TraininGround from "./TrainingGround.mjs";
import Combat from "./Combat.mjs";

const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");

const data = await response.json();
const trainingGround = new TraininGround(data);

const superHero = trainingGround.createSuperHero();
const villain   = trainingGround.createVillain();


const Die3      = DieFactory.createDie(DieID.D3);
const Die5      = DieFactory.createDie(DieID.D5);
const Die20     = DieFactory.createDie(DieID.D20);
const Die100    = DieFactory.createDie(DieID.D100);

const ArrayOfDies = [Die3, Die5, Die20, Die100];

const combat = new Combat(superHero, villain, ArrayOfDies);

console.log("¡WELCOME TO THE COMBAT ARENA!");
console.log("-----------------------------")
console.log("¡Hoy combatiran " + superHero.name + " vs " + villain.name);
console.log("-----------------------------")
console.log("Listado de atributos");
console.log(superHero);
console.log(villain);
console.log("-----------------------------")
combat.execute();