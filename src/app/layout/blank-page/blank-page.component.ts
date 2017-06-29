import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../patient.service';
import {Router} from '@angular/router';
import {Doctor} from '../../models/doctor-model';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    allDoc: Array<{doctor: Doctor}>;
    defaultTime = {hour: 13, minute: 30};
    meridianTime = {hour: 13, minute: 30};
    meridian = true;

    SecondsTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
    seconds = true;

    customTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
    hourStep = 1;
    minuteStep = 30;
    secondStep = 30;
    constructor(private patientservice: PatientService, private router: Router) {}
    ngOnInit() { }

    showDocBySD(date: string, speciality: string){
        this.patientservice.searchBySD(date, speciality).subscribe((data) => {
            this.allDoc = data;
            this.router.navigate(['/dashboard']);
            console.log(this.allDoc);
        });
    }


    toggleSeconds() {
        this.seconds = !this.seconds;
    }

    toggleMeridian() {
        this.meridian = !this.meridian;
    }

}
