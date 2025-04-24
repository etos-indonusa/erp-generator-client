import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpartRoutingModule } from './mpart-routing.module';
import { MpartListComponent } from './mpart-list/mpart-list.component';
import { MpartShareModule } from './mpart-share/mpart-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MpartDetailComponent } from './mpart-detail/mpart-detail.component';
import { MpartDetailPartComponent } from './mpart-detail/mpart-detail-part/mpart-detail-part.component';
import { MpartDetailRoutineMaintenanceComponent } from './mpart-detail/mpart-detail-routine-maintenance/mpart-detail-routine-maintenance.component';
import { MpartDetailFigureIndexComponent } from './mpart-detail/mpart-detail-figure-index/mpart-detail-figure-index.component';
import { MpartDetailAlternativeComponent } from './mpart-detail/mpart-detail-alternative/mpart-detail-alternative.component';
import { MpartDetailThersholdComponent } from './mpart-detail/mpart-detail-thershold/mpart-detail-thershold.component';
import { MpartDetailAttachmentComponent } from './mpart-detail/mpart-detail-attachment/mpart-detail-attachment.component';
import { MpartDetailLogComponent } from './mpart-detail/mpart-detail-log/mpart-detail-log.component';
import { MpartDetailLastMaintenanceComponent } from './mpart-detail/mpart-detail-last-maintenance/mpart-detail-last-maintenance.component';
import { PartShareModule } from '../part/part-share/part-share.module';
import { PartFigureIndexShareModule } from '../part-figure-index/part-figure-index-share/part-figure-index-share.module';


@NgModule({
    declarations: [
        MpartListComponent,
        MpartDetailComponent,
        MpartDetailPartComponent,
        MpartDetailRoutineMaintenanceComponent,
        MpartDetailFigureIndexComponent,
        MpartDetailAlternativeComponent,
        MpartDetailThersholdComponent,
        MpartDetailAttachmentComponent,
        MpartDetailLogComponent,
        MpartDetailLastMaintenanceComponent
    ],
    imports: [
        CommonModule,
        MpartRoutingModule,
        MpartShareModule,
        AntSimpleModule,
        TampilanModule,
        PartShareModule,
        PartFigureIndexShareModule
    ]
})
export class MpartModule { }
