import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurVendorListComponent } from './pur-vendor-list/pur-vendor-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurVendorListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurVendorRoutingModule { }
