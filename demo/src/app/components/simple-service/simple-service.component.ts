import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {CountryService} from '../../services/country.service';

@Component({
  selector:    'simple-service',
  templateUrl: 'simple-service.component.html',
  styleUrls: [
    'simple-service.component.scss'
  ]
})
export class SimpleServiceComponent {
  public options:AutoCompleteOptions;

  public selected:string = '';

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
