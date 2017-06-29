import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientProfileComponent } from './patient-profile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    { path: '', component: PatientProfileComponent , children: [
        { path: 'profile', component: ProfileComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientProfileRoutingModule { }
