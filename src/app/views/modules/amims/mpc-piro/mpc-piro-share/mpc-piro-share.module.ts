import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MpcPiroShareAddComponent } from './mpc-piro-share-add/mpc-piro-share-add.component';
import { MpcPiroShareDetailComponent } from './mpc-piro-share-detail/mpc-piro-share-detail.component'; 
import { MpcPiroShareWidgetComponent } from './mpc-piro-share-widget/mpc-piro-share-widget.component';
import { MpcPiroShareListComponent } from './mpc-piro-share-list/mpc-piro-share-list.component';
import { MpcPiroShareHeaderComponent } from './mpc-piro-share-header/mpc-piro-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    MpcPiroShareAddComponent,
    MpcPiroShareDetailComponent,
    MpcPiroShareListComponent,
    MpcPiroShareHeaderComponent,
    MpcPiroShareWidgetComponent
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
export class MpcPiroShareModule { }
