import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MpartRoutingModule } from './mpart-routing.module';
import { MpartListComponent } from './mpart-list/mpart-list.component';
import { MpartShareModule } from './mpart-share/mpart-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { MpartDetailComponent } from './mpart-detail/mpart-detail.component';  
import { PartFigureIndexShareModule } from '../part-figure-index/part-figure-index-share/part-figure-index-share.module';
import { PartShareModule } from '../part/part-share/part-share.module';


@NgModule({
    declarations: [
        MpartListComponent,
        MpartDetailComponent 
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
