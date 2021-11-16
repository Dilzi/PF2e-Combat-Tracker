/*
An encounter involves multiple creatures (players and npcs), each with their own current HP, temp HP, initiative, conditions, etc.

Any template-specific feature of a creature (max hp, saves, AC, name, etc) will be pulled from the creature itself, but any encounter-specific feature is stored here (current hp, initiative, conditions)

*/
import { Combatant } from './combatant';



export class Encounter{
  
  
  combatants: Combatant[];
  currentTurn: number;
  currentRound: number;

  stateRunning: boolean;

  timeReal: number; //How many real seconds elapsed since combat start
  timeGame: number; //How many game seconds elapsed since combat start (1 round = 6 real secs)

  constructor(){
    this.combatants[0].name
  }

  sortList(){
    

  }

/*
  modifyHealth(id: number, amount: number) {
    if (amount > 0){ //Damage
      if (amount > this.stats.hptemp) {
        this.stats.hp -= amount - this.stats.hptemp;
        this.stats.hptemp = 0;
      } else {
        this.stats.hptemp -= amount;
      }
    } else { //Heal
      this.stats.hp -= amount;
    }
   

    if (this.stats.hp <= 0) {
      this.stats.hp = 0;
      //thing is dead, set dying condition.
    }
    if (this.stats.hp >= this.stats.hpmax) {
      this.stats.hp = this.stats.hpmax;
    }
  }
*/

  RandomNum(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}