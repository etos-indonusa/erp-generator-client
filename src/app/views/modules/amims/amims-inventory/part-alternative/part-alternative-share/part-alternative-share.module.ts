import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { PartAlternativeShareAddComponent } from './part-alternative-share-add/part-alternative-share-add.component';
import { PartAlternativeShareDetailComponent } from './part-alternative-share-detail/part-alternative-share-detail.component'; 
import { PartAlternativeShareWidgetComponent } from './part-alternative-share-widget/part-alternative-share-widget.component';
import { PartAlternativeShareListComponent } from './part-alternative-share-list/part-alternative-share-list.component';
import { PartAlternativeShareHeaderComponent } from './part-alternative-share-header/part-alternative-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    PartAlternativeShareAddComponent,
    PartAlternativeShareDetailComponent,
    PartAlternativeShareListComponent,
    PartAlternativeShareHeaderComponent,
    PartAlternativeShareWidgetComponent
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
export class PartAlternativeShareModule { }
