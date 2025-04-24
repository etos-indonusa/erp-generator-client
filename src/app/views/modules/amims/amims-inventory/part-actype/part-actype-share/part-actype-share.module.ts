import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartActypeShareAddComponent } from './part-actype-share-add/part-actype-share-add.component';
import { PartActypeShareDetailComponent } from './part-actype-share-detail/part-actype-share-detail.component'; 
import { PartActypeShareWidgetComponent } from './part-actype-share-widget/part-actype-share-widget.component';
import { PartActypeShareListComponent } from './part-actype-share-list/part-actype-share-list.component';
import { PartActypeShareHeaderComponent } from './part-actype-share-header/part-actype-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartActypeShareAddComponent,
    PartActypeShareDetailComponent,
    PartActypeShareListComponent,
    PartActypeShareHeaderComponent,
    PartActypeShareWidgetComponent
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
export class PartActypeShareModule { }
