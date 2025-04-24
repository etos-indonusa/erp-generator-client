import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalGrnItemListComponent } from './internal-grn-item-list/internal-grn-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: InternalGrnItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InternalGrnItemRoutingModule { }
