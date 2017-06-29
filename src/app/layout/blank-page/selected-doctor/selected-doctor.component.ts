import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../patient.service';
import {Router} from '@angular/router';
import {Doctor} from '../../../models/doctor-model';

@Component({
  selector: 'app-selected-doctor',
  templateUrl: './selected-doctor.component.html',
  styleUrls: ['./selected-doctor.component.scss']
})
export class SelectedDoctorComponent implements OnInit {
    thisDoctor: Doctor;
    schedule: Array<string>;

  constructor(private patientservice: PatientService, private router: Router) { }

  ngOnInit() {
      this.thisDoctor = this.patientservice.selectedDoctor;
  }
  goToMakeAppointment(){
      this.router.navigate(['/search/makeappointment']);
  }

}
