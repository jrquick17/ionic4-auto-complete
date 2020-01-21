import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {SimpleFunction} from '../../services/simple-function.service';

@Component({
  selector:    'multi-function',
  templateUrl: 'multi-function.component.html',
  styleUrls: [
    'multi-function.component.scss'
  ]
})
export class MultiFunctionComponent {
  public excludedOptions:AutoCompleteOptions;
  public selectedOptions:AutoCompleteOptions;

  public excluded:string[] = [];
  public selected:string[] = [];

  constructor(
    public provider:SimpleFunction
  ) {
    this.selectedOptions = new AutoCompleteOptions();
    this.selectedOptions.autocomplete = 'on';
    this.selectedOptions.debounce = 750;
    this.selectedOptions.placeholder = 'Filter and select multiple..';
    this.selectedOptions.searchIcon = 'assets/icons/add-user.svg';
    this.selectedOptions.type = 'search';

    this.excludedOptions = new AutoCompleteOptions();
    this.excludedOptions.autocomplete = 'on';
    this.excludedOptions.debounce = 750;
    this.excludedOptions.placeholder = 'Filter and select multiple to exclude..';
    this.excludedOptions.searchIcon = 'assets/icons/add-user.svg';
    this.excludedOptions.type = 'search';
  }

  on(output, event):void {
    console.log(output);
    // console.log(event);
  }
}
