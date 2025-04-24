import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartFigureIndexShareAddComponent } from './part-figure-index-share-add/part-figure-index-share-add.component';
import { PartFigureIndexShareDetailComponent } from './part-figure-index-share-detail/part-figure-index-share-detail.component'; 
import { PartFigureIndexShareWidgetComponent } from './part-figure-index-share-widget/part-figure-index-share-widget.component';
import { PartFigureIndexShareListComponent } from './part-figure-index-share-list/part-figure-index-share-list.component';
import { PartFigureIndexShareHeaderComponent } from './part-figure-index-share-header/part-figure-index-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartFigureIndexShareAddComponent,
    PartFigureIndexShareDetailComponent,
    PartFigureIndexShareListComponent,
    PartFigureIndexShareHeaderComponent,
    PartFigureIndexShareWidgetComponent
]

@NgModule({
    declarations: [
        ...COM,
    ],
    exports: [
        ...COM
    ], 
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule,
        RouterModule,
        // ApprovalModule,
        CustomFieldValueShareModule
    ]
}) 
export class PartFigureIndexShareModule { }
