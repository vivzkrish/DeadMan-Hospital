import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../patient.service';
import {Patient} from '../../models/patient-model';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.scss']
})
export class PatientProfileComponent implements OnInit {
    currentPatient: Patient;
  constructor(private patientservice: PatientService) { }

  ngOnInit() {
      this.currentPatient = this.patientservice.currentPatient;
      console.log(this.currentPatient);
  }
}
