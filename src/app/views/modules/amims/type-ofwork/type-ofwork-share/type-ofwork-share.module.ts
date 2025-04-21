import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { TypeOfworkShareAddComponent } from './type-ofwork-share-add/type-ofwork-share-add.component';
import { TypeOfworkShareDetailComponent } from './type-ofwork-share-detail/type-ofwork-share-detail.component'; 
import { TypeOfworkShareWidgetComponent } from './type-ofwork-share-widget/type-ofwork-share-widget.component';
import { TypeOfworkShareListComponent } from './type-ofwork-share-list/type-ofwork-share-list.component';
import { TypeOfworkShareHeaderComponent } from './type-ofwork-share-header/type-ofwork-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    TypeOfworkShareAddComponent,
    TypeOfworkShareDetailComponent,
    TypeOfworkShareListComponent,
    TypeOfworkShareHeaderComponent,
    TypeOfworkShareWidgetComponent
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
export class TypeOfworkShareModule { }
