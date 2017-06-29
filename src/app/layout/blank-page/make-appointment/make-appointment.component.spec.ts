import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MakeAppointmentComponent } from './make-appointment.component';

describe('MakeAppointmentComponent', () => {
  let component: MakeAppointmentComponent;
  let fixture: ComponentFixture<MakeAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            NgbModule.forRoot()
        ],
      declarations: [ MakeAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
