import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PositionShareAddComponent } from './position-share-add/position-share-add.component';
import { PositionShareDetailComponent } from './position-share-detail/position-share-detail.component'; 
import { PositionShareWidgetComponent } from './position-share-widget/position-share-widget.component';
import { PositionShareListComponent } from './position-share-list/position-share-list.component';
import { PositionShareHeaderComponent } from './position-share-header/position-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PositionShareAddComponent,
    PositionShareDetailComponent,
    PositionShareListComponent,
    PositionShareHeaderComponent,
    PositionShareWidgetComponent
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
export class PositionShareModule { }
