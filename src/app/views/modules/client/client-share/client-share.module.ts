import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientShareAddComponent } from './client-share-add/client-share-add.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module'; 
import { TampilanModule } from '../../../../shared/tampilan.module';
import { ClientShareDetailComponent } from './client-share-detail/client-share-detail.component';
 
 
@NgModule({
    declarations: [
        ClientShareAddComponent, 
        ClientShareDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AntSimpleModule,
        TampilanModule
    ]
}) 
export class ClientShareModule { }
