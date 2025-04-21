import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerPrisItemShareAddComponent } from './engineer-pris-item-share-add/engineer-pris-item-share-add.component';
import { EngineerPrisItemShareDetailComponent } from './engineer-pris-item-share-detail/engineer-pris-item-share-detail.component'; 
import { EngineerPrisItemShareWidgetComponent } from './engineer-pris-item-share-widget/engineer-pris-item-share-widget.component';
import { EngineerPrisItemShareListComponent } from './engineer-pris-item-share-list/engineer-pris-item-share-list.component';
import { EngineerPrisItemShareHeaderComponent } from './engineer-pris-item-share-header/engineer-pris-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerPrisItemShareAddComponent,
    EngineerPrisItemShareDetailComponent,
    EngineerPrisItemShareListComponent,
    EngineerPrisItemShareHeaderComponent,
    EngineerPrisItemShareWidgetComponent
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
export class EngineerPrisItemShareModule { }
