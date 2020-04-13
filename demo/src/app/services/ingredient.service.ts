import {Injectable} from '@angular/core';

import {AutoCompleteService} from 'ionic4-auto-complete';

import {IngredientModel} from '../models/ingredient.model';

@Injectable()
export class IngredientService implements AutoCompleteService {
  labelAttribute = 'name';

  public objects:IngredientModel[] = [
      {
          name: 'Cilantro'
      },
      {
          name: 'Avocado'
      },
      {
          name: 'Onion'
      },
      {
          name: 'Pepper'
      },
      {
          name: 'Salt'
      },
      {
          name: 'Tomato'
      }
  ];

  constructor() {

  }

  add(ingredient:IngredientModel):void {
      this.objects.push(ingredient);
  }

  getResults(keyword:string):IngredientModel[] {
    keyword = keyword.toLowerCase();

    return this.objects.filter(
      (object) => {
         const value = object[this.labelAttribute].toLowerCase();

         return value.includes(keyword);
      }
    );
  }
}
