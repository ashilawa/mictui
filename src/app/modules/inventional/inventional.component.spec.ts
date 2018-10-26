import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventionalComponent } from './inventional.component';

describe('InventionalComponent', () => {
  let component: InventionalComponent;
  let fixture: ComponentFixture<InventionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
