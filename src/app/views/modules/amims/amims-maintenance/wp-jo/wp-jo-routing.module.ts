import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WpJoListComponent } from './wp-jo-list/wp-jo-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: WpJoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WpJoRoutingModule { }
