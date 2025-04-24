import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { MpcWpShareAddComponent } from './mpc-wp-share-add/mpc-wp-share-add.component';
import { MpcWpShareDetailComponent } from './mpc-wp-share-detail/mpc-wp-share-detail.component'; 
import { MpcWpShareWidgetComponent } from './mpc-wp-share-widget/mpc-wp-share-widget.component';
import { MpcWpShareListComponent } from './mpc-wp-share-list/mpc-wp-share-list.component';
import { MpcWpShareHeaderComponent } from './mpc-wp-share-header/mpc-wp-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    MpcWpShareAddComponent,
    MpcWpShareDetailComponent,
    MpcWpShareListComponent,
    MpcWpShareHeaderComponent,
    MpcWpShareWidgetComponent
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
export class MpcWpShareModule { }
