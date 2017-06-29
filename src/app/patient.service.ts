import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Patient} from './models/patient-model';
import {Doctor} from './models/doctor-model';

@Injectable()
export class PatientService {
    adminShowPatients: Array<{patient: Patient}>;
    currentPatient: Patient;
    patientSelectDoctors: Array<{doctor: Doctor}>;
    selectedDoctor: Doctor;
constructor(private  http: Http) { }
    getById(id: string) {
        return this.http.get('http://localhost:9080/patient/' + id).map(
            (res: Response) =>
                res.json()
        );
    }
    getByEmail(email: string) {
        return this.http.get('http://localhost:9080/patient/email' + email).map(
            (res: Response) =>
                res.json()
        );
    }
    selectDoctorByID(id: string) {
        return this.http.get('http://localhost:9080/doctor/' + id).map(
            (res: Response) =>
                res.json()
        );
    }
    regeisterPatient(patient) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:9080/patient/regeisterpatient',
            JSON.stringify(patient), options).map(
            (res: Response) =>
                res.json()
        )
            .catch(
                (error: Response) =>
                {
                    console.log('Somthing went wrong with the request');
                    return Observable.throw(error);
                }
            );
    }
    updateProfile(patient: Patient) {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:9080/patient/update',
            JSON.stringify(patient), options).map(
            (res: Response) =>
                res.json()
        )
            .catch(
                (error: Response) =>
                {
                    console.log('Somthing went wrong with the request');
                    return Observable.throw(error);
                }
            );
    }
    deletePatient(id: number) {
        return this.http.delete('http://localhost:9080/patient/delete' + id).map((response: Response) => response.json());
    }
    searchBySD(date: string, speciality: string){
        return this.http.get('http://localhost:9080/patient/search/' + date + '/' + speciality).map(
            (res: Response) =>
                res.json()
        )
            .catch(
                (error: Response) =>
                {
                    console.log('Somthing went wrong with the request');
                    return Observable.throw(error);
                }
            );
    }
    searchBySpeciality(speciality: string){
        return this.http.get('http://localhost:9080/patient/searchbyspeciality/' + speciality).map(
            (res: Response) =>
                res.json()
        )
            .catch(
                (error: Response) =>
                {
                    console.log('Somthing went wrong with the request');
                    return Observable.throw(error);
                }
            );
    }
    showAvailableSchedule(doc_id: string, date: string){
        return this.http.get('http://localhost:9080/patient/showavailable/' + doc_id + '/' + date).map(
            (res: Response) =>
                res.json()
        )
            .catch(
                (error: Response) =>
                {
                    console.log('Somthing went wrong with the request');
                    return Observable.throw(error);
                }
            );
    }
    makeAppointment(doc_id: string, patient_id: string, date: string, start: string) {
        return this.http.post('http://localhost:9080/patient/makeappointment/' + doc_id + '/' + patient_id + '/'
            + date + '/' + start, '').map(
            (res: Response) =>
                res.json()
        )
            .catch(
                (error: Response) =>
                {
                    console.log('Somthing went wrong with the request');
                    return Observable.throw(error);
                }
            );
    }





}
