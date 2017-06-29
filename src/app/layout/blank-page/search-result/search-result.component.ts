import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {PatientService} from '../../../patient.service';
import {Router} from '@angular/router';
import {Doctor} from '../../../models/doctor-model';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
    doctors: Array<{doctor: Doctor}>;
    thisDoctor: Doctor;
    public isCollapsed = true;
  constructor(private patientservice: PatientService, private  router: Router) {
      this.doctors = this.patientservice.patientSelectDoctors;
  }
  ngOnInit() {
      this.doctors = this.patientservice.patientSelectDoctors;
      console.log(this.doctors);
  }

  showTheDoctors(){
      this.doctors = this.patientservice.patientSelectDoctors;
      console.log(this.doctors);
  }
  seeThisDoctor(doctor: Doctor){
      this.patientservice.selectedDoctor = doctor;
      this.router.navigate(['/search/selecteddoctor']);
  }
    goToMakeAppointment(doctor: Doctor) {
        this.patientservice.selectedDoctor = doctor;
        this.router.navigate(['/search/makeappointment']);
    }

}
