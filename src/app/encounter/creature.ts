/*
 * Provides an interface for stat collection.
 * Can be used to quickly provide saves and stats at a glance.
 * Not really intended for automation, that would be too complex.
 */


export interface Condition {}

export class Creature {
  name: string = 'New combatant';
  description: string = '';

  hpmax: number;
  ac: number;

  reflex: number;
  fortitude: number;
  will: number;



  /*
   * Initialises all stats to 0 and randomises an id.
   * A stat at 0 will not display.
   * Allows filling in name and initiative for quick characters.
   */
  constructor() {  
    this.randomise();
  }

  //------- METHODS ------


/**
 * A temporary method to generate randomised stats for a creature, in the absence of a proper backend.
 */

  randomise() {
    let name1: string;
    let name2: string;
    this.hpmax = this.RandomNum(5,15);
    this.ac = this.RandomNum(15,22);

    this.reflex = this.RandomNum(2,8);
    this.fortitude = this.RandomNum(2,8);
    this.will = this.RandomNum(2,8);

    switch (this.RandomNum(1,6)){
      case 1:
        name1 = "Small" 
        break;
      case 2:
        name1= "Undecided"
        break;
      case 3: 
        name1="Ugly"
        break;
      case 4:
        name1="Timid"
        break;
      case 5:
        name1="Happy"
        break;
      case 6:
        name1="Strong"
        break;
      }
    switch (this.RandomNum(1,6)){
      case 1:
        name2 = "Kobold" 
        break;
      case 2:
        name2= "Goblin"
        break;
      case 3: 
        name2="Elf"
        break;
      case 4:
        name2="Mitflit"
        break;
      case 5:
        name2="Harpy"
        break;
      case 6:
        name2="Morlock"
        break;
    }

    this.name = name1 + " " + name2;
  }

  RandomNum(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
}
