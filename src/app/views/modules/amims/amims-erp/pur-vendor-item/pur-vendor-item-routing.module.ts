import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurVendorItemListComponent } from './pur-vendor-item-list/pur-vendor-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurVendorItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurVendorItemRoutingModule { }
