import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule } from '../../shared';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';
import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { SelectedDoctorComponent } from './selected-doctor/selected-doctor.component';
@NgModule({
  imports: [
      FormsModule,
      ReactiveFormsModule,
    CommonModule,
    BlankPageRoutingModule,
      NgbModule,
      PageHeaderModule,
  ],
  declarations: [BlankPageComponent, SearchResultComponent, SearchComponent, MakeAppointmentComponent, SelectedDoctorComponent]
})
export class BlankPageModule { }
