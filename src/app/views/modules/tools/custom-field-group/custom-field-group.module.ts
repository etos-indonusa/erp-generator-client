import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFieldGroupRoutingModule } from './custom-field-group-routing.module'; 
import { CustomFieldGroupShareModule } from './custom-field-group-share/custom-field-group-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [ 
  ],
  imports: [
    CommonModule,
    CustomFieldGroupRoutingModule,
    CustomFieldGroupShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class CustomFieldGroupModule { }
