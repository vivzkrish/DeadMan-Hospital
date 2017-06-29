import { Component, OnInit } from '@angular/core';
import {PatientService} from '../patient.service';
import { Router } from '@angular/router';
import {AlertService} from '../alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    model: any = {};
    loading = false;
    regeistertry: false;
    regeistersuccess: boolean;
    regeisterfail: boolean;
    userid: string;
    patient: {patient_name: string, patientEmail: string, patient_age: number, patient_id: string, password: string};
    constructor(private patient_service: PatientService, private router: Router, private alertService: AlertService) { }

    register(patient_name: string, patient_age: number, patient_email: string, password: string) {
        this.loading = true;
        this.patient = {password: password, patient_age: patient_age, patient_name: patient_name, patientEmail: patient_email,
        patient_id: '0'};
        console.log(password);
        this.patient_service.regeisterPatient(this.patient)
            .subscribe(
                data => {
                    this.regeistersuccess = true;
                    this.regeisterfail = false;
                    this.alertService.success('Registration successful', true);
                    /*this.router.navigate(['/login']);*/
                },
                error => {
                    this.regeistersuccess = false;
                    this.regeisterfail = true;
                    this.alertService.error(error);
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/signup']);
                    console.log(error);
                    this.loading = false;
                });
    }
    ngOnInit() { }

    onSingUp() { }
}
