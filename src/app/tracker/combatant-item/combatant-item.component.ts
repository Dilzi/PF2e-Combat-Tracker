import { Component, OnInit, Input } from '@angular/core';
import {Combatant,  Stats} from '../combatant';


@Component({
  selector: 'app-combatant-item',
  templateUrl: './combatant-item.component.html',
  styleUrls: ['./combatant-item.component.css']
})
export class CombatantItemComponent implements OnInit {

  @Input() combatant: Combatant;



  constructor() { }

  ngOnInit() {
  }

}