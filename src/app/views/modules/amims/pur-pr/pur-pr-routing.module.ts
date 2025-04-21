import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurPrListComponent } from './pur-pr-list/pur-pr-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurPrListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurPrRoutingModule { }
