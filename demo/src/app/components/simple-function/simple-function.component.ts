import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {SimpleFunction} from '../../services/simple-function.service';

@Component({
  selector:    'simple-function',
  templateUrl: 'simple-function.component.html',
  styleUrls: [
    'simple-function.component.scss'
  ]
})
export class SimpleFunctionComponent {
  public options:any;

  public selected:string = '';

  constructor(
    public provider:SimpleFunction
  ) {
    this.options = {};

    // this.autocompleteOptions.autocomplete = 'on';
    // this.autocompleteOptions.cancelButtonIcon = 'assets/icons/clear.svg';
    // this.autocompleteOptions.clearIcon = 'assets/icons/clear.svg';
    // this.autocompleteOptions.debounce = 750;
    // this.autocompleteOptions.placeholder = 'Type text to search..';
    // this.autocompleteOptions.searchIcon = 'assets/icons/add-user.svg';
    // this.autocompleteOptions.type = 'search';
  }

  on(output, event):void {
    console.log(output);
    // console.log(event);
  }
}
