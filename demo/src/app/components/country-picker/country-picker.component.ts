import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {CountryService} from '../../services/country.service';

@Component({
  selector:    'custom-template',
  templateUrl: 'country-picker.component.html',
  styleUrls: [
    'country-picker.component.scss'
  ]
})
export class CountryPickerComponent {
  public options:AutoCompleteOptions;

  public selected:string[] = [];

  constructor(
      public provider:CountryService
  ) {
    this.options = new AutoCompleteOptions();

    this.options.autocomplete = 'on';
    this.options.debounce = 750;
    this.options.placeholder = 'Type text to search..';
    this.options.type = 'add-friend.svg';
  }

  on(output, event):void {
    console.log(output);
    // console.log(event);
  }
}
