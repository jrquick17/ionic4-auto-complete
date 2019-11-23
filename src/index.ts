import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

export * from './ionic4-phone-spinner/ionic4-phone-spinner.component';
export * from './pipes/range.pipe';
export * from './models/lock-options.model';
export * from './models/ionic4-phone-spinner.model';

import {Ionic4PhoneSpinnerComponent} from './ionic4-phone-spinner/ionic4-phone-spinner.component';
import {RangePipe} from './pipes/range.pipe';

@NgModule({
  declarations: [
    Ionic4PhoneSpinnerComponent,
    RangePipe
  ],
  exports: [
    Ionic4PhoneSpinnerComponent,
    RangePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class Ionic4PhoneSpinnerModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: Ionic4PhoneSpinnerModule,
      providers: []
    };
  }
}
