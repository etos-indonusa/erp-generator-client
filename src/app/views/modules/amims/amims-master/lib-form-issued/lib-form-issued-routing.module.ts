import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibFormIssuedListComponent } from './lib-form-issued-list/lib-form-issued-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LibFormIssuedListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibFormIssuedRoutingModule { }
