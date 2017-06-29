import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertPartComponent } from './alert-part.component';

describe('AlertPartComponent', () => {
  let component: AlertPartComponent;
  let fixture: ComponentFixture<AlertPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
