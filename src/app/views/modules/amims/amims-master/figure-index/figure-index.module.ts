import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FigureIndexRoutingModule } from './figure-index-routing.module';
import { FigureIndexListComponent } from './figure-index-list/figure-index-list.component';
import { FigureIndexShareModule } from './figure-index-share/figure-index-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
    exports: [
        FigureIndexListComponent
    ],
    declarations: [
        FigureIndexListComponent
    ],
    imports: [
        CommonModule,
        FigureIndexRoutingModule,
        FigureIndexShareModule,
        AntSimpleModule,
        TampilanModule
    ]
})
export class FigureIndexModule { }
 