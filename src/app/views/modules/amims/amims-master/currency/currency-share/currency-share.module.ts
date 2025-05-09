import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { CurrencyShareAddComponent } from './currency-share-add/currency-share-add.component';
import { CurrencyShareDetailComponent } from './currency-share-detail/currency-share-detail.component'; 
import { CurrencyShareWidgetComponent } from './currency-share-widget/currency-share-widget.component';
import { CurrencyShareListComponent } from './currency-share-list/currency-share-list.component';
import { CurrencyShareHeaderComponent } from './currency-share-header/currency-share-header.component';
import { ApprovalModule } from 'src/app/views/lib/approval/approval.module';
import { CustomFieldValueShareModule } from 'src/app/views/lib/custom-field-value/custom-field-value-share.module';

const COM = [
    CurrencyShareAddComponent,
    CurrencyShareDetailComponent,
    CurrencyShareListComponent,
    CurrencyShareHeaderComponent,
    CurrencyShareWidgetComponent
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
export class CurrencyShareModule { }
