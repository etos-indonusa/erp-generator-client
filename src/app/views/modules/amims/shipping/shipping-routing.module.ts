import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippingListComponent } from './shipping-list/shipping-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: ShippingListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShippingRoutingModule { }
