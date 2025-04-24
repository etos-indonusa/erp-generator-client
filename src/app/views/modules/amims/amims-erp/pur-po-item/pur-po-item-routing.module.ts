import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurPoItemListComponent } from './pur-po-item-list/pur-po-item-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurPoItemListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurPoItemRoutingModule { }
