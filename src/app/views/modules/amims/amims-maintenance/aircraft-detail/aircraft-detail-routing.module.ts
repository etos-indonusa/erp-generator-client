import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftDetailListComponent } from './aircraft-detail-list/aircraft-detail-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: AircraftDetailListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AircraftDetailRoutingModule { }
