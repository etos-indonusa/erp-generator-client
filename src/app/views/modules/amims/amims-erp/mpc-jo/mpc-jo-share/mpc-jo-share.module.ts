import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MpcJoShareAddComponent } from './mpc-jo-share-add/mpc-jo-share-add.component';
import { MpcJoShareDetailComponent } from './mpc-jo-share-detail/mpc-jo-share-detail.component'; 
import { MpcJoShareWidgetComponent } from './mpc-jo-share-widget/mpc-jo-share-widget.component';
import { MpcJoShareListComponent } from './mpc-jo-share-list/mpc-jo-share-list.component';
import { MpcJoShareHeaderComponent } from './mpc-jo-share-header/mpc-jo-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    MpcJoShareAddComponent,
    MpcJoShareDetailComponent,
    MpcJoShareListComponent,
    MpcJoShareHeaderComponent,
    MpcJoShareWidgetComponent
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
export class MpcJoShareModule { }
