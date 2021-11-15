import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component'
import { CombatantDetailComponent } from './tracker/combatant-detail/combatant-detail.component'
import { CombatantItemComponent } from './tracker/combatant-item/combatant-item.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TrackerComponent, CombatantDetailComponent, CombatantItemComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
