import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { EncounterComponent } from './encounter/encounter.component';
import { CombatantDetailComponent } from './tracker/combatant-detail/combatant-detail.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TrackerComponent,
    CombatantDetailComponent,
    EncounterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
