import { Component, OnInit } from '@angular/core';
import { Combatant, Stats } from './combatant';
import { COMBLIST } from './combatant-list';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  //List of combatants. Will be drawn from a webserver at some point.
  combList = COMBLIST;

  //Currently selected combatant. May be replaced by popups
  selectedCombatant?: Combatant;

  
  //------------------------------------------
  constructor() { }

  ngOnInit() {  }

  onClick(selcombatant): void {
    this.selectedCombatant = selcombatant;
  }

  addCombatant(): void {
    console.log("newCombatant");
    console.log(this.combList[0].stats.ac)
    this.combList.push(new Combatant());

  }

}