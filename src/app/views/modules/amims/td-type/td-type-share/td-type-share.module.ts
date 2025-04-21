import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TdTypeShareAddComponent } from './td-type-share-add/td-type-share-add.component';
import { TdTypeShareDetailComponent } from './td-type-share-detail/td-type-share-detail.component'; 
import { TdTypeShareWidgetComponent } from './td-type-share-widget/td-type-share-widget.component';
import { TdTypeShareListComponent } from './td-type-share-list/td-type-share-list.component';
import { TdTypeShareHeaderComponent } from './td-type-share-header/td-type-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TdTypeShareAddComponent,
    TdTypeShareDetailComponent,
    TdTypeShareListComponent,
    TdTypeShareHeaderComponent,
    TdTypeShareWidgetComponent
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
export class TdTypeShareModule { }
