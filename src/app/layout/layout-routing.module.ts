import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {PatientComponent} from './patient/patient.component';
import {PatientProfileComponent} from "./patient-profile/patient-profile.component";
import {TestComponent} from './test/test.component'
const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'patient-profile', component: PatientProfileComponent },
            { path: 'test', component: TestComponent },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'search', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'patient', component: PatientComponent}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
