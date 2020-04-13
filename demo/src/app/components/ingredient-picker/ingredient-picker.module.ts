import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {AutoCompleteModule} from 'ionic4-auto-complete';

import {IngredientPickerComponent} from './ingredient-picker.component';

import {IngredientService} from '../../services/ingredient.service';

@NgModule({
  declarations: [
    IngredientPickerComponent
  ],
  entryComponents: [
    IngredientPickerComponent
  ],
  exports: [
    IngredientPickerComponent
  ],
  imports: [
    AutoCompleteModule,
    CommonModule,
    FormsModule,
    IonicModule
  ],
  providers: [
    IngredientService
  ]
})
export class IngredientPickerModule {}
