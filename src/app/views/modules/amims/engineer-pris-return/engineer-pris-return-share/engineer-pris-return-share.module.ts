import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { EngineerPrisReturnShareAddComponent } from './engineer-pris-return-share-add/engineer-pris-return-share-add.component';
import { EngineerPrisReturnShareDetailComponent } from './engineer-pris-return-share-detail/engineer-pris-return-share-detail.component'; 
import { EngineerPrisReturnShareWidgetComponent } from './engineer-pris-return-share-widget/engineer-pris-return-share-widget.component';
import { EngineerPrisReturnShareListComponent } from './engineer-pris-return-share-list/engineer-pris-return-share-list.component';
import { EngineerPrisReturnShareHeaderComponent } from './engineer-pris-return-share-header/engineer-pris-return-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    EngineerPrisReturnShareAddComponent,
    EngineerPrisReturnShareDetailComponent,
    EngineerPrisReturnShareListComponent,
    EngineerPrisReturnShareHeaderComponent,
    EngineerPrisReturnShareWidgetComponent
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
export class EngineerPrisReturnShareModule { }
