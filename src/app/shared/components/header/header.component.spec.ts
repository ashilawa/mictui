import {async, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {HeaderComponent} from './header.component';
import {TestsModule} from '../../modules/tests.module';
import {APP_CONFIG, AppConfig} from '../../../configs/app.config';
import {MaterialModule} from '../../modules/material.module';

describe('HeaderComponent', () => {
  let fixture;
  let component;
  let progressBarService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        TranslateModule.forRoot(),
        MaterialModule
      ],
      declarations: [
        HeaderComponent
      ],
      providers: [
        {provide: APP_CONFIG, useValue: AppConfig}
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));

  it('should create header component with constructor', (() => {
    const translateService = TestBed.get(TranslateService);
    const instance = new HeaderComponent();
    expect(instance).toBeTruthy();
  }));

  it('should create header component', (() => {
    expect(component).toBeTruthy();
  }));

  it('should update progress bar', (() => {
    expect(component.progressBarMode).toBeUndefined();
    progressBarService.updateProgressBar$.emit('query');
    expect(component.progressBarMode).toBe('query');
  }));

  it('should change language to spanish', (() => {
    expect(component.translateService.currentLang).toBeUndefined();
    component.changeLanguage('es');
    expect(component.translateService.currentLang).toBe('es');
  }));
});
