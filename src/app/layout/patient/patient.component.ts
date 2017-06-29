import { Component, OnInit } from '@angular/core';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
    defaultTime = {hour: 13, minute: 30};
    meridianTime = {hour: 13, minute: 30};
    meridian = true;

    SecondsTime: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
    seconds = true;

    customTime: NgbTimeStruct = {hour: 13, minute: 30, second: 0};
    hourStep = 1;
    minuteStep = 15;
    secondStep = 30;
  constructor() { }

  ngOnInit() {
  }
    toggleSeconds() {
        this.seconds = !this.seconds;
    }

    toggleMeridian() {
        this.meridian = !this.meridian;
    }
}
