import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WpListComponent } from './wp-list/wp-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: WpListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WpRoutingModule { }
