import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PurReturnShareAddComponent } from './pur-return-share-add/pur-return-share-add.component';
import { PurReturnShareDetailComponent } from './pur-return-share-detail/pur-return-share-detail.component'; 
import { PurReturnShareWidgetComponent } from './pur-return-share-widget/pur-return-share-widget.component';
import { PurReturnShareListComponent } from './pur-return-share-list/pur-return-share-list.component';
import { PurReturnShareHeaderComponent } from './pur-return-share-header/pur-return-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PurReturnShareAddComponent,
    PurReturnShareDetailComponent,
    PurReturnShareListComponent,
    PurReturnShareHeaderComponent,
    PurReturnShareWidgetComponent
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
export class PurReturnShareModule { }
