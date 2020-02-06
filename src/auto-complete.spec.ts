import {TestBed, async} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';

import {IonicModule} from '@ionic/angular';

import {AutoCompleteComponent} from './auto-complete/auto-complete.component';
import {BoldPrefix} from './bold-prefix.pipe';

describe('AutoCompleteComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        IonicModule,
        RouterTestingModule
      ],
      declarations: [
        AutoCompleteComponent,
        BoldPrefix
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AutoCompleteComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
