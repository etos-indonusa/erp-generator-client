import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartCategoryRoutingModule } from './part-category-routing.module';
import { PartCategoryListComponent } from './part-category-list/part-category-list.component';
import { PartCategoryShareModule } from './part-category-share/part-category-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    PartCategoryListComponent
  ],
  imports: [
    CommonModule,
    PartCategoryRoutingModule,
    PartCategoryShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class PartCategoryModule { }
