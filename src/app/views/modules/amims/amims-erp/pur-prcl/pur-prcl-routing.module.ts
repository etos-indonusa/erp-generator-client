import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurPrclListComponent } from './pur-prcl-list/pur-prcl-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurPrclListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurPrclRoutingModule { }
