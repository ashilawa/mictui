import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudConnectivityComponent } from './cloud-connectivity.component';

describe('CloudConnectivityComponent', () => {
  let component: CloudConnectivityComponent;
  let fixture: ComponentFixture<CloudConnectivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudConnectivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudConnectivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
