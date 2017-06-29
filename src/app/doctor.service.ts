import { Injectable } from '@angular/core';
import {Doctor} from './models/doctor-model';
@Injectable()
export class DoctorService {
    currentDoctor: Doctor = new Doctor();
  constructor() { }

}
