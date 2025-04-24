import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartAtaShareAddComponent } from './part-ata-share-add/part-ata-share-add.component';
import { PartAtaShareDetailComponent } from './part-ata-share-detail/part-ata-share-detail.component'; 
import { PartAtaShareWidgetComponent } from './part-ata-share-widget/part-ata-share-widget.component';
import { PartAtaShareListComponent } from './part-ata-share-list/part-ata-share-list.component';
import { PartAtaShareHeaderComponent } from './part-ata-share-header/part-ata-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartAtaShareAddComponent,
    PartAtaShareDetailComponent,
    PartAtaShareListComponent,
    PartAtaShareHeaderComponent,
    PartAtaShareWidgetComponent
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
export class PartAtaShareModule { }
