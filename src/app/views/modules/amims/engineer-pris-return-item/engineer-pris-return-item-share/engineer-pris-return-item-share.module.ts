import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerPrisReturnItemShareAddComponent } from './engineer-pris-return-item-share-add/engineer-pris-return-item-share-add.component';
import { EngineerPrisReturnItemShareDetailComponent } from './engineer-pris-return-item-share-detail/engineer-pris-return-item-share-detail.component'; 
import { EngineerPrisReturnItemShareWidgetComponent } from './engineer-pris-return-item-share-widget/engineer-pris-return-item-share-widget.component';
import { EngineerPrisReturnItemShareListComponent } from './engineer-pris-return-item-share-list/engineer-pris-return-item-share-list.component';
import { EngineerPrisReturnItemShareHeaderComponent } from './engineer-pris-return-item-share-header/engineer-pris-return-item-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerPrisReturnItemShareAddComponent,
    EngineerPrisReturnItemShareDetailComponent,
    EngineerPrisReturnItemShareListComponent,
    EngineerPrisReturnItemShareHeaderComponent,
    EngineerPrisReturnItemShareWidgetComponent
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
export class EngineerPrisReturnItemShareModule { }
