import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankPageComponent } from './blank-page.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {SearchComponent} from './search/search.component';
import {MakeAppointmentComponent} from './make-appointment/make-appointment.component';
import {SelectedDoctorComponent} from './selected-doctor/selected-doctor.component';
const routes: Routes = [
    { path: '', component: BlankPageComponent,
        children: [
            { path: 'searchresult', component: SearchResultComponent },
            { path: 'searchdoc', component: SearchComponent },
            { path: 'makeappointment', component: MakeAppointmentComponent },
            { path: 'selecteddoctor', component: SelectedDoctorComponent }]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlankPageRoutingModule { }
