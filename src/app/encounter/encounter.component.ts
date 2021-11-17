import { Component, OnInit } from '@angular/core';
import { Encounter } from './encounter';
import { Combatant } from './combatant';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {

  currentEncounter: Encounter = new Encounter();



  constructor() {
    this.currentEncounter.addCombatant();

   }

  ngOnInit() {
  }

}