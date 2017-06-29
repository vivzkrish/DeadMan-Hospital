import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientProfileComponent } from './patient-profile.component';
import { PatientProfileRoutingModule } from './patient-profile-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        PatientProfileRoutingModule,
        PageHeaderModule
    ],
    declarations: [PatientProfileComponent]
})
export class PatientProfileModule { }
