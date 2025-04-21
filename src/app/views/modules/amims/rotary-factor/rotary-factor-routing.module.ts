import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaryFactorListComponent } from './rotary-factor-list/rotary-factor-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: RotaryFactorListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RotaryFactorRoutingModule { }
