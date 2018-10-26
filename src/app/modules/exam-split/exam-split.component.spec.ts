import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamSplitComponent } from './exam-split.component';

describe('ExamSplitComponent', () => {
  let component: ExamSplitComponent;
  let fixture: ComponentFixture<ExamSplitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamSplitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
