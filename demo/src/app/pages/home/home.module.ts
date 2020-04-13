import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';

import {CountryPickerModule} from '../../components/country-picker/country-picker.module';
import {TeamPickerModule} from '../../components/team-picker/team-picker.module';
import {IngredientPickerModule} from '../../components/ingredient-picker/ingredient-picker.module';
import {SimpleServiceModule} from '../../components/simple-service/simple-service.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    CountryPickerModule,
    FormsModule,
    IonicModule,
    TeamPickerModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    IngredientPickerModule,
    SimpleServiceModule
  ]
})
export class HomePageModule {}
