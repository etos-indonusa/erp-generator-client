import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartidShareAddComponent } from './partid-share-add/partid-share-add.component';
import { PartidShareDetailComponent } from './partid-share-detail/partid-share-detail.component'; 
import { PartidShareWidgetComponent } from './partid-share-widget/partid-share-widget.component';
import { PartidShareListComponent } from './partid-share-list/partid-share-list.component';
import { PartidShareHeaderComponent } from './partid-share-header/partid-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartidShareAddComponent,
    PartidShareDetailComponent,
    PartidShareListComponent,
    PartidShareHeaderComponent,
    PartidShareWidgetComponent
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
export class PartidShareModule { }
