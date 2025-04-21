import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurReturnListComponent } from './pur-return-list/pur-return-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PurReturnListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PurReturnRoutingModule { }
