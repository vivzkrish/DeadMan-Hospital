import { Component, OnInit } from '@angular/core';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-alert-part',
  templateUrl: './alert-part.component.html',
  styleUrls: ['./alert-part.component.scss']
})
export class AlertPartComponent implements OnInit {
    message: any;
  constructor(private alertservice: AlertService) { }

  ngOnInit() {
      this.alertservice.getMessage().subscribe(message => { this.message = message; });
  }

}
