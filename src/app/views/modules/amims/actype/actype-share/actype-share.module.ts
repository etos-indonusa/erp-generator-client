import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { ActypeShareAddComponent } from './actype-share-add/actype-share-add.component';
import { ActypeShareDetailComponent } from './actype-share-detail/actype-share-detail.component'; 
import { ActypeShareWidgetComponent } from './actype-share-widget/actype-share-widget.component';
import { ActypeShareListComponent } from './actype-share-list/actype-share-list.component';
import { ActypeShareHeaderComponent } from './actype-share-header/actype-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    ActypeShareAddComponent,
    ActypeShareDetailComponent,
    ActypeShareListComponent,
    ActypeShareHeaderComponent,
    ActypeShareWidgetComponent
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
export class ActypeShareModule { }
