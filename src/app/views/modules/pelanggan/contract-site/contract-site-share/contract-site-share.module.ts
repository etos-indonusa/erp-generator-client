import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';  
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { ContractSiteShareAddComponent } from './contract-site-share-add/contract-site-share-add.component';
import { ContractSiteShareDetailComponent } from './contract-site-share-detail/contract-site-share-detail.component'; 
import { ContractSiteShareWidgetComponent } from './contract-site-share-widget/contract-site-share-widget.component';
import { ContractSiteShareListComponent } from './contract-site-share-list/contract-site-share-list.component';
import { ContractSiteShareHeaderComponent } from './contract-site-share-header/contract-site-share-header.component';

 
const COM = [
    ContractSiteShareAddComponent,
    ContractSiteShareDetailComponent,
    ContractSiteShareListComponent,
    ContractSiteShareHeaderComponent,
    ContractSiteShareWidgetComponent
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
export class ContractSiteShareModule { }
