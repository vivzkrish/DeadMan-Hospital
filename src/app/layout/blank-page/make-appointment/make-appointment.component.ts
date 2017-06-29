import { Component, OnInit } from '@angular/core';
import {PatientService} from '../../../patient.service';
import {Router} from '@angular/router';
import {Doctor} from '../../../models/doctor-model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-make-appointment',
  templateUrl: './make-appointment.component.html',
  styleUrls: ['./make-appointment.component.scss']
})
export class MakeAppointmentComponent implements OnInit {
    closeResult: string;
    thisDoctor: Doctor;
    schedule: Array<{start_time: string, end_time: string}>;
    model: any;
    convertedDate: string;
    makeappointmentresult: any;
    appointmenttime: string;
  constructor(private modalService: NgbModal, private patientservice: PatientService, private router: Router) { }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }





  ngOnInit() {
      this.thisDoctor = this.patientservice.selectedDoctor;
  }
    showAvailableSchedule() {
        /*console.log(this.model);*/
        this.convertedDate = this.model.year + '-' + this.model.month + '-' + this.model.day;
        /*      console.log(this.convertedDate);
         console.log(speciality);*/
        this.patientservice.showAvailableSchedule(this.thisDoctor.doc_id, this.convertedDate).subscribe(data => {
            this.schedule = data;
            console.log(this.schedule);
/*            this.patientservice.patientSelectDoctors = data;*/
            /*this.router.navigate(['/search/searchresult']);*/
            /*          ****** Used to Test If BackEnd Returns Correct Results ******
             console.log(this.patientservice.patientSelectDoctors);
             console.log(data);
             console.log(this.allDoc);
             console.log(this.allDoc[0]);*/
        });
    }
    makeAppointment(selectedtime: string) {
        console.log(this.appointmenttime);
        this.patientservice.makeAppointment(this.thisDoctor.doc_id, '1', this.convertedDate, selectedtime).subscribe(data => {
            this.makeappointmentresult = data;
            console.log(this.makeappointmentresult);
            this.router.navigate(['/dashboard']);
        }, error => {
            /*   this.router.navigate(['/login']);*/
            console.log(error);
        });
        this.router.navigate(['/dashboard']);
       /* console.log(selectedtime);*/
    }

}
