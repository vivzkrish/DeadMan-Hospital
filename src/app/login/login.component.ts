import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {LoginServiceService} from '../login-service.service';
import {AlertService} from '../alert.service';
import {PatientService} from '../patient.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    result: boolean;
    login_data: {patient_id: string, password: string};

    constructor(private patientservice: PatientService, private alertservice: AlertService, public router: Router, private  loginservice: LoginServiceService) { }

    ngOnInit() { }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
    onActualLogin(userid: string, password: string) {

        this.login_data = {patient_id: userid, password: password};
        this.loginservice.logininService(this.login_data).subscribe(
            data => {
            this.result = data;
            if (this.result === true) {
                this.storeCurrentPatient();
                localStorage.setItem('isLoggedin', 'true');
                this.router.navigate(['/dashboard']);
            }},
            error => {
                this.alertservice.error(error);
                this.result = false;
             /*   this.router.navigate(['/login']);*/
                console.log(error);
            });
        console.log(this.result);
    }
    storeCurrentPatient() {
        this.patientservice.getById(this.login_data.patient_id).subscribe(
            data => {
                this.patientservice.currentPatient = data;
                console.log(this.patientservice.currentPatient);
            }
        );
    }
}
