import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurPrItemListComponent } from './pur-pr-item-list/pur-pr-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurPrItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurPrItemRoutingModule { }
