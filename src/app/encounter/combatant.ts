import { Creature } from './creature';
//import { Condition } from './condition';


/**
 * An instantiated version of a creature, granting it encounter-specific info.
 * @param {string} name A unique name for the combatant.
 */
export class Combatant{
  id: number; //Unique identifier, allows multiple instances of creatures.
  name: string; //Name for this specific combatant, seperate from it's creature name.
  
  creature: Creature; //Base stats for creature. Read only.
  
  initiative: number = 0; //Position in encounter. Can change, either by DELAY or going unconcious.
  
  hp: number; //Current HP statistic.
  hptemp: number; //Any temp HP that is accumulated.
  
  //conditions: Condition[]; //List of conditions affecting the combatant.

  constructor(creature: Creature){
    this.id = this.RandomNum(1,9999);
    this.creature = creature;
    this.hp = this.creature.hpmax;
  }



  RandomNum(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

}
