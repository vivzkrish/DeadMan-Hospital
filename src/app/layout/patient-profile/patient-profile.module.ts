import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientProfileComponent } from './patient-profile.component';
import { PatientProfileRoutingModule } from './patient-profile-routing.module';
import { PageHeaderModule } from './../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@NgModule({
    imports: [
        CommonModule,
        PatientProfileRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    declarations: [PatientProfileComponent, ProfileComponent, EditProfileComponent]
})
export class PatientProfileModule { }
