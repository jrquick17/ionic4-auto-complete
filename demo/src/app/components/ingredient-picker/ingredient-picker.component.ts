import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {IngredientService} from '../../services/ingredient.service';
import {IngredientModel} from '../../models/ingredient.model';

@Component({
  selector:    'ingredient-picker',
  templateUrl: 'ingredient-picker.component.html',
  styleUrls: [
    'ingredient-picker.component.scss'
  ]
})
export class IngredientPickerComponent {
  public newIngredient:string = '';
  public options:AutoCompleteOptions;

  public selected:IngredientModel[] = [];

  constructor(
      public provider:IngredientService
  ) {
    this.options = new AutoCompleteOptions();

    this.options.autocomplete = 'on';
    this.options.cancelButtonIcon = 'assets/icons/clear.svg';
    this.options.clearIcon = 'assets/icons/clear.svg';
    this.options.debounce = 750;
    this.options.placeholder = 'Type text to search..';
    this.options.searchIcon = 'assets/icons/add-user.svg';
    this.options.type = 'search';
  }

  add():void {
    const ingredient = {
      name: this.newIngredient
    };

    this.provider.add(ingredient);

    this.selected.push(ingredient);

    this.newIngredient = '';
  }

  on(output, event):void {
    if (output === 'ionAutoInput') {
      this.newIngredient = event;
    }

    console.log(output);
    // console.log(event);
  }

  reset():void {
    this.selected = null;
  }
}
