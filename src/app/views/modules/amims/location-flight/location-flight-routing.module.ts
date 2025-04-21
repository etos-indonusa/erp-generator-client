import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationFlightListComponent } from './location-flight-list/location-flight-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LocationFlightListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocationFlightRoutingModule { }
