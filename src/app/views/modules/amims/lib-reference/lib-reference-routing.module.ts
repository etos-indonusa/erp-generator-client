import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibReferenceListComponent } from './lib-reference-list/lib-reference-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: LibReferenceListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LibReferenceRoutingModule { }
