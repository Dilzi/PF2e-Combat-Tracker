/*
 * Provides an interface for stat collection.
 * Can be used to quickly provide saves and stats at a glance.
 * Not really intended for automation, that would be too complex.
 */

export interface Stats {
  hp: number;
  hpmax: number;
  hptemp: number;
  ac: number;

  reflex: number;
  fortitude: number;
  will: number;
}


export interface Condition {}

export class Creature {
  id: number;
  name: string = 'New combatant';
  stats: Stats; //(HP, AC, RFLX, FORT, WILL)
  conditions: Condition[];
  initiative: number = 0;
  description: string = '';

  /*
   * Initialises all stats to 0 and randomises an id.
   * A stat at 0 will not display.
   * Allows filling in name and initiative for quick characters.
   */
  constructor(name?: string, init?: number) {
    this.id = Math.floor(Math.random() * 1000);
    let newstats: Stats = {
      hp: 10,
      hpmax: 10,
      hptemp: 0,
      ac: 0,
      reflex: 0,
      fortitude: 0,
      will: 0,
    };
    this.stats = newstats;
    if (name) {
      this.name = name;
    }
    if (init) {
      this.initiative = init;
    }

    this.randomise();
  }

  //------- METHODS ------
  
  /**
   * Reduces/increases HP of a creature. Reduces temp HP first.
   * 
   * **amount** dictates the change value.
   * 
   * Positive values damage, negative values heal.
   * Cannot overflow; if *hp* goes above *hpmax*, it will cap at *hpmax*.
   */
  modifyHealth(amount: number) {
    if (amount >= this.stats.hptemp){
      this.stats.hptemp = 0;
      this.stats.hp -= (amount - this.stats.hptemp);
    } else {
      this.stats.hptemp -= amount;
    }
  
    if (this.stats.hp <= 0) {
      //thing is dead, set dying condition.
    }    
    if (this.stats.hp >= this.stats.hpmax) {
      this.stats.hp = this.stats.hpmax;
    }
  }


  randomise() {
    let name1: string;
    let name2: string;
    this.stats.hpmax = this.RandomNum(5,15);
    this.stats.hp = this.stats.hpmax;
    this.stats.ac = this.RandomNum(15,22);

    this.stats.reflex = this.RandomNum(2,8);
    this.stats.fortitude = this.RandomNum(2,8);
    this.stats.will = this.RandomNum(2,8);

    this.initiative = this.RandomNum(1,20) + this.RandomNum(1,8);

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
