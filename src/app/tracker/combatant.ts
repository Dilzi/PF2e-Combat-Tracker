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
  //test
}

export class Combatant {
  id: number;
  name: string = 'New combatant';
  stats: Stats = { hp: 0, hpmax: 0, hptemp: 0, ac: 0, reflex: 0, fortitude:0, will: 0};
  initiative: number = 0;
  description: string = '';

  /*
   * Initialises all stats to 0 and randomises an id.
   */
  constructor(name?: string, init?: number) {
    this.id = Math.floor(Math.random() * 1000);
    
    this.randomise();
  }

  //------- METHODS ------
  getId(): number {
    return this.id;
  }

  modifyHealth(amount: number) {
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

  randomise() {
    let name1: string;
    let name2: string;
    this.stats.hpmax = this.RandomNum(5, 15);
    this.stats.hp = this.stats.hpmax;
    this.stats.ac = this.RandomNum(15, 22);
    if (this.RandomNum(1,4) == 1) { //25% chance a creature iwll have temp HP  
      this.stats.hptemp = this.RandomNum(0, 5);
    }
    this.stats.reflex = this.RandomNum(2, 8);
    this.stats.fortitude = this.RandomNum(2, 8);
    this.stats.will = this.RandomNum(2, 8);

    this.initiative = this.RandomNum(1, 20) + this.RandomNum(1, 8);

    switch (this.RandomNum(1, 6)) {
      case 1:
        name1 = 'Small';
        break;
      case 2:
        name1 = 'Undecided';
        break;
      case 3:
        name1 = 'Ugly';
        break;
      case 4:
        name1 = 'Timid';
        break;
      case 5:
        name1 = 'Happy';
        break;
      case 6:
        name1 = 'Strong';
        break;
    }
    switch (this.RandomNum(1, 6)) {
      case 1:
        name2 = 'Kobold';
        break;
      case 2:
        name2 = 'Goblin';
        break;
      case 3:
        name2 = 'Elf';
        break;
      case 4:
        name2 = 'Mitflit';
        break;
      case 5:
        name2 = 'Harpy';
        break;
      case 6:
        name2 = 'Morlock';
        break;
    }

    this.name = name1 + ' ' + name2;
  }

  RandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
