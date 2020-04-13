import {Component} from '@angular/core';

import {AutoCompleteOptions} from 'ionic4-auto-complete';

import {PeopleService} from '../../services/people.service';
import {UserModel} from '../../models/user.model';

@Component({
  selector:    'multi-function',
  templateUrl: 'team-picker.component.html',
  styleUrls: [
    'team-picker.component.scss'
  ]
})
export class TeamPickerComponent {
  public otherTeamOptions:AutoCompleteOptions;
  public otherTeamIsSelecting:boolean = false;
  public teamOptions:AutoCompleteOptions;

  public otherTeam:UserModel[] = [];
  public selected:UserModel[] = [];

  constructor(
    public provider:PeopleService
  ) {
    this.teamOptions = new AutoCompleteOptions();
    this.teamOptions.autocomplete = 'on';
    this.teamOptions.debounce = 750;
    this.teamOptions.placeholder = 'Filter and select multiple..';
    this.teamOptions.searchIcon = 'assets/icons/add-user.svg';
    this.teamOptions.type = 'search';

    this.otherTeamOptions = new AutoCompleteOptions();
    this.otherTeamOptions.autocomplete = 'on';
    this.otherTeamOptions.debounce = 750;
    this.otherTeamOptions.placeholder = 'Pick or click random';
    this.teamOptions.searchIcon = 'assets/icons/add-user.svg';
    this.teamOptions.type = 'search';
  }

  on(output, event):void {
    console.log(output);
    // console.log(event);
  }

  random():void {
    const users = this.provider.getResults('');

    const count = users.length;

    this.otherTeam.push(users[Math.round(Math.random() * count)]);
  }

  selectTeam(name:string):void {
    this.on('itemSelected', name);

    this.selectOtherTeam();
  }

  selectOtherTeam():void {
    this.otherTeamIsSelecting = true;

    setTimeout(
      () => {
        this.random();

        this.otherTeamIsSelecting = false;
      },
      Math.random() * 1000 * 5
    )
  }
}
