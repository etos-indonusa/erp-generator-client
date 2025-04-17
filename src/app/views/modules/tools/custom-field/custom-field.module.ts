import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFieldRoutingModule } from './custom-field-routing.module';
import { CustomFieldListComponent } from './custom-field-list/custom-field-list.component';
import { CustomFieldShareModule } from './custom-field-share/custom-field-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    CustomFieldListComponent
  ],
  imports: [
    CommonModule,
    CustomFieldRoutingModule,
    CustomFieldShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class CustomFieldModule { }
