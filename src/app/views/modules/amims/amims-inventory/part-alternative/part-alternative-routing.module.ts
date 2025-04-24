import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartAlternativeListComponent } from './part-alternative-list/part-alternative-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: PartAlternativeListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartAlternativeRoutingModule { }
