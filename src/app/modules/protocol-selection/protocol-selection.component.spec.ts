import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocolSelectionComponent } from './protocol-selection.component';

describe('ProtocolSelectionComponent', () => {
  let component: ProtocolSelectionComponent;
  let fixture: ComponentFixture<ProtocolSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtocolSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtocolSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
