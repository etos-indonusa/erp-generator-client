import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerPrisShareAddComponent } from './engineer-pris-share-add/engineer-pris-share-add.component';
import { EngineerPrisShareDetailComponent } from './engineer-pris-share-detail/engineer-pris-share-detail.component'; 
import { EngineerPrisShareWidgetComponent } from './engineer-pris-share-widget/engineer-pris-share-widget.component';
import { EngineerPrisShareListComponent } from './engineer-pris-share-list/engineer-pris-share-list.component';
import { EngineerPrisShareHeaderComponent } from './engineer-pris-share-header/engineer-pris-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerPrisShareAddComponent,
    EngineerPrisShareDetailComponent,
    EngineerPrisShareListComponent,
    EngineerPrisShareHeaderComponent,
    EngineerPrisShareWidgetComponent
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
export class EngineerPrisShareModule { }
