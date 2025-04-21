import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { BinShareAddComponent } from './bin-share-add/bin-share-add.component';
import { BinShareDetailComponent } from './bin-share-detail/bin-share-detail.component'; 
import { BinShareWidgetComponent } from './bin-share-widget/bin-share-widget.component';
import { BinShareListComponent } from './bin-share-list/bin-share-list.component';
import { BinShareHeaderComponent } from './bin-share-header/bin-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    BinShareAddComponent,
    BinShareDetailComponent,
    BinShareListComponent,
    BinShareHeaderComponent,
    BinShareWidgetComponent
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
export class BinShareModule { }
