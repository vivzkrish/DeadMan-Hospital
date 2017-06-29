import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {PatientService} from '../../../patient.service';
import {Router} from '@angular/router';
import {Doctor} from '../../../models/doctor-model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    defaultTime = {hour: 13, minute: 30};
    meridianTime = {hour: 13, minute: 30};
    meridian = true;
    model: any;
    allDoc: Array<{doctor: Doctor}>;
    specialityDoc: Array<{doctor: Doctor}>;
    SecondsTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
    seconds = true;

    convertedDate: string;

    customTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
    hourStep = 1;
    minuteStep = 30;
    secondStep = 30;
  constructor(private patientservice: PatientService, private router: Router ) { }

  ngOnInit() {
  }
    toggleSeconds() {
        this.seconds = !this.seconds;
    }

    toggleMeridian() {
        this.meridian = !this.meridian;
    }
    showDocBySD(speciality: string){
      /*console.log(this.model);*/
      this.convertedDate = this.model.year + '-' + this.model.month + '-' + this.model.day;
/*      console.log(this.convertedDate);
      console.log(speciality);*/
        this.patientservice.searchBySD(this.convertedDate, speciality).subscribe((data) => {
            this.allDoc = data;
            this.patientservice.patientSelectDoctors = data;
            this.router.navigate(['/search/searchresult']);
/*          ****** Used to Test If BackEnd Returns Correct Results ******
            console.log(this.patientservice.patientSelectDoctors);
            console.log(data);
            console.log(this.allDoc);
            console.log(this.allDoc[0]);*/
        });
    }
    showDocBySpeciality(speciality: string){
        this.patientservice.searchBySpeciality(speciality).subscribe((data) => {
            this.specialityDoc = data;
            this.patientservice.patientSelectDoctors = data;
            this.router.navigate(['/search/searchresult']);
            /*          ****** Used to Test If BackEnd Returns Correct Results ******
             console.log(this.patientservice.patientSelectDoctors);
             console.log(data);
             console.log(this.allDoc);
             console.log(this.allDoc[0]);*/
        });
    }

}
