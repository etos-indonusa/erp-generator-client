import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MpcGseShareAddComponent } from './mpc-gse-share-add/mpc-gse-share-add.component';
import { MpcGseShareDetailComponent } from './mpc-gse-share-detail/mpc-gse-share-detail.component'; 
import { MpcGseShareWidgetComponent } from './mpc-gse-share-widget/mpc-gse-share-widget.component';
import { MpcGseShareListComponent } from './mpc-gse-share-list/mpc-gse-share-list.component';
import { MpcGseShareHeaderComponent } from './mpc-gse-share-header/mpc-gse-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    MpcGseShareAddComponent,
    MpcGseShareDetailComponent,
    MpcGseShareListComponent,
    MpcGseShareHeaderComponent,
    MpcGseShareWidgetComponent
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
export class MpcGseShareModule { }
