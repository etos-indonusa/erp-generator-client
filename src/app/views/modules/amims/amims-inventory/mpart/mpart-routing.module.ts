import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MpartDetailAlternativeComponent } from './mpart-detail/mpart-detail-alternative/mpart-detail-alternative.component';
import { MpartDetailAttachmentComponent } from './mpart-detail/mpart-detail-attachment/mpart-detail-attachment.component';
import { MpartDetailFigureIndexComponent } from './mpart-detail/mpart-detail-figure-index/mpart-detail-figure-index.component';
import { MpartDetailLastMaintenanceComponent } from './mpart-detail/mpart-detail-last-maintenance/mpart-detail-last-maintenance.component';
import { MpartDetailLogComponent } from './mpart-detail/mpart-detail-log/mpart-detail-log.component';
import { MpartDetailPartComponent } from './mpart-detail/mpart-detail-part/mpart-detail-part.component';
import { MpartDetailRoutineMaintenanceComponent } from './mpart-detail/mpart-detail-routine-maintenance/mpart-detail-routine-maintenance.component';
import { MpartDetailThersholdComponent } from './mpart-detail/mpart-detail-thershold/mpart-detail-thershold.component';
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
        children:[
            {
                path:'',
                redirectTo:'part',
                pathMatch: 'full'
            },
            {
                path:'part',
                component: MpartDetailPartComponent
            },
            {
                path:'routine-maintenance',
                component: MpartDetailRoutineMaintenanceComponent
            },
            {
                path:'figure-index',
                component: MpartDetailFigureIndexComponent
            },
            {
                path:'alternative',
                component: MpartDetailAlternativeComponent
            },
            {
                path:'threshold',
                component: MpartDetailThersholdComponent
            },
            {
                path:'attachment',
                component: MpartDetailAttachmentComponent
            },
            {
                path:'log',
                component: MpartDetailLogComponent
            },
            {
                path:'last-maintenance',
                component: MpartDetailLastMaintenanceComponent
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MpartRoutingModule { }
