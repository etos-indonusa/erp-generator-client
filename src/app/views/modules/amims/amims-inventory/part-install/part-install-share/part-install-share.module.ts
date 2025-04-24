import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartInstallShareAddComponent } from './part-install-share-add/part-install-share-add.component';
import { PartInstallShareDetailComponent } from './part-install-share-detail/part-install-share-detail.component'; 
import { PartInstallShareWidgetComponent } from './part-install-share-widget/part-install-share-widget.component';
import { PartInstallShareListComponent } from './part-install-share-list/part-install-share-list.component';
import { PartInstallShareHeaderComponent } from './part-install-share-header/part-install-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartInstallShareAddComponent,
    PartInstallShareDetailComponent,
    PartInstallShareListComponent,
    PartInstallShareHeaderComponent,
    PartInstallShareWidgetComponent
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
export class PartInstallShareModule { }
