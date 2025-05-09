import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { MpartDetailComponent } from './mpart-detail/mpart-detail.component';
import { MpartListComponent } from './mpart-list/mpart-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: MpartListComponent
    },
    {
        path: 'detail/:id_mpart',
        component: MpartDetailComponent,
        // children:[
        //     {
        //         path:'',
        //         redirectTo:'part',
        //         pathMatch: 'full'
        //     },
        //     {
        //         path:'part',
        //         component: MpartDetailPartComponent
        //     },
        //     {
        //         path:'routine-maintenance',
        //         component: MpartDetailRoutineMaintenanceComponent
        //     },
        //     {
        //         path:'figure-index',
        //         component: MpartDetailFigureIndexComponent
        //     },
        //     {
        //         path:'alternative',
        //         component: MpartDetailAlternativeComponent
        //     },
        //     {
        //         path:'threshold',
        //         component: MpartDetailThersholdComponent
        //     },
        //     {
        //         path:'attachment',
        //         component: MpartDetailAttachmentComponent
        //     },
        //     {
        //         path:'log',
        //         component: MpartDetailLogComponent
        //     },
        //     {
        //         path:'last-maintenance',
        //         component: MpartDetailLastMaintenanceComponent
        //     },
        // ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpartRoutingModule { }
