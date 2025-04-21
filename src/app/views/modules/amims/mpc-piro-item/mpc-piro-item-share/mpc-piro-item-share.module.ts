import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MpcPiroItemShareAddComponent } from './mpc-piro-item-share-add/mpc-piro-item-share-add.component';
import { MpcPiroItemShareDetailComponent } from './mpc-piro-item-share-detail/mpc-piro-item-share-detail.component'; 
import { MpcPiroItemShareWidgetComponent } from './mpc-piro-item-share-widget/mpc-piro-item-share-widget.component';
import { MpcPiroItemShareListComponent } from './mpc-piro-item-share-list/mpc-piro-item-share-list.component';
import { MpcPiroItemShareHeaderComponent } from './mpc-piro-item-share-header/mpc-piro-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    MpcPiroItemShareAddComponent,
    MpcPiroItemShareDetailComponent,
    MpcPiroItemShareListComponent,
    MpcPiroItemShareHeaderComponent,
    MpcPiroItemShareWidgetComponent
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
export class MpcPiroItemShareModule { }
