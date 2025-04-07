import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from '../../../../shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { ContractShareAddComponent } from './contract-share-add/contract-share-add.component';
import { ContractShareDetailComponent } from './contract-share-detail/contract-share-detail.component';
import { ContractShareWidgetComponent } from './contract-share-widget/contract-share-widget.component';
import { ContractShareListComponent } from './contract-share-list/contract-share-list.component';
import { ContractShareHeaderComponent } from './contract-share-header/contract-share-header.component';

const COM = [
    ContractShareAddComponent,
    ContractShareDetailComponent,
    ContractShareListComponent,
    ContractShareHeaderComponent,
    ContractShareWidgetComponent
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
        RouterModule
    ]
})
export class ContractShareModule { }
