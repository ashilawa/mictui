import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenRoomDisplayComponent } from './screen-room-display.component';

describe('ScreenRoomDisplayComponent', () => {
  let component: ScreenRoomDisplayComponent;
  let fixture: ComponentFixture<ScreenRoomDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenRoomDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenRoomDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
