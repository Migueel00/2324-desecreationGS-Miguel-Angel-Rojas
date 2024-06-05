import DieFactory from "./DieFactory.mjs";
import { DieID } from "./constants.mjs";
import TraininGround from "./TrainingGround.mjs";

const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");

const data = await response.json();
const trainingGround = new TraininGround(data);

const SuperHero = trainingGround.createSuperHero();
const villain   = trainingGround.createVillain();

console.log("heroe: " + SuperHero.hp);
console.log("villano: " + villain.hp);

const Die3      = DieFactory.createDie(DieID.D3);
const Die5      = DieFactory.createDie(DieID.D5);
const Die20     = DieFactory.createDie(DieID.D20);
const Die100    = DieFactory.createDie(DieID.D100);

