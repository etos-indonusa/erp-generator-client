import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartInstallOldShareAddComponent } from './part-install-old-share-add/part-install-old-share-add.component';
import { PartInstallOldShareDetailComponent } from './part-install-old-share-detail/part-install-old-share-detail.component'; 
import { PartInstallOldShareWidgetComponent } from './part-install-old-share-widget/part-install-old-share-widget.component';
import { PartInstallOldShareListComponent } from './part-install-old-share-list/part-install-old-share-list.component';
import { PartInstallOldShareHeaderComponent } from './part-install-old-share-header/part-install-old-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartInstallOldShareAddComponent,
    PartInstallOldShareDetailComponent,
    PartInstallOldShareListComponent,
    PartInstallOldShareHeaderComponent,
    PartInstallOldShareWidgetComponent
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
export class PartInstallOldShareModule { }
