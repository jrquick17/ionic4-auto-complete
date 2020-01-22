import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {BoldPrefix} from './bold-prefix.pipe';

export * from './auto-complete-options.model';

export * from './auto-complete.service';

export * from './auto-complete/auto-complete.component';
export * from './bold-prefix.pipe';

@NgModule({
  declarations: [
    AutoCompleteComponent,
    BoldPrefix
  ],
  exports: [
    AutoCompleteComponent,
    BoldPrefix
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class AutoCompleteModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: AutoCompleteModule,
      providers: []
    };
  }
}
