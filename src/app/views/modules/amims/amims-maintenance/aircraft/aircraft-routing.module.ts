import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AircraftListComponent } from './aircraft-list/aircraft-list.component';
import { AirctatDetailComponent } from './airctat-detail/airctat-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: AircraftListComponent
    },
    {
        path: 'detail/:id_aicraft',
        component: AirctatDetailComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AircraftRoutingModule { }
