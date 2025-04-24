import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurVendorContactListComponent } from './pur-vendor-contact-list/pur-vendor-contact-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurVendorContactListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurVendorContactRoutingModule { }
