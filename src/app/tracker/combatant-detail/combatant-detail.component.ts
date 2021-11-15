import { Component, OnInit, Input } from '@angular/core';
import { Combatant } from '../combatant';

@Component({
  selector: 'app-combatant-detail',
  templateUrl: './combatant-detail.component.html',
  styleUrls: ['./combatant-detail.component.css']
})
export class CombatantDetailComponent implements OnInit {

  @Input() combatant: Combatant;
  
  editMode: Boolean;
  editName: string;



  /**
   * Controls edit mode on a text box.
   * Values for *mode* are as follows;
   * 
   * **edit:**
   *    Turns edit mode on, allowing text editing. Adds Accept and Cancel icons.
   * 
   * **save:**
   *    Saves changes to original value and turns edit mode off.
   *
   * **cancel:**
   *    Turns edit mode off and does not modify text.
   * 
   */
  clickEdit(mode:string){
    switch(mode){
      case "edit":
        this.editName = this.combatant.name;
        this.editMode = true;
        break;

      case "save":
        this.combatant.name = this.editName;
        this.editMode = false;
        break;

      case "cancel":
        this.editMode = false;
        break;
    };
  }


  

  constructor() { }

  ngOnInit() {
    this.editMode = false; //Initialises the Edit Mode to false.
  }

}