import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MpcJoOperatorShareAddComponent } from './mpc-jo-operator-share-add/mpc-jo-operator-share-add.component';
import { MpcJoOperatorShareDetailComponent } from './mpc-jo-operator-share-detail/mpc-jo-operator-share-detail.component'; 
import { MpcJoOperatorShareWidgetComponent } from './mpc-jo-operator-share-widget/mpc-jo-operator-share-widget.component';
import { MpcJoOperatorShareListComponent } from './mpc-jo-operator-share-list/mpc-jo-operator-share-list.component';
import { MpcJoOperatorShareHeaderComponent } from './mpc-jo-operator-share-header/mpc-jo-operator-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    MpcJoOperatorShareAddComponent,
    MpcJoOperatorShareDetailComponent,
    MpcJoOperatorShareListComponent,
    MpcJoOperatorShareHeaderComponent,
    MpcJoOperatorShareWidgetComponent
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
export class MpcJoOperatorShareModule { }
