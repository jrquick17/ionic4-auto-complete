import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AutoCompleteModule} from 'ionic4-auto-complete';

import {TeamPickerComponent} from './team-picker.component';

import {PeopleService} from '../../services/people.service';

@NgModule({
  declarations: [
    TeamPickerComponent
  ],
  entryComponents: [
    TeamPickerComponent
  ],
  exports: [
    TeamPickerComponent
  ],
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    PeopleService
  ]
})
export class TeamPickerModule {}
