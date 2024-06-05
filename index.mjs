import DieFactory from "./DieFactory.mjs";
import { DieID } from "./constants.mjs";


const DIE = DieFactory.createDie(DieID.D3);
const roll = DIE.roll();
console.log("Roll dado:  " + roll)

