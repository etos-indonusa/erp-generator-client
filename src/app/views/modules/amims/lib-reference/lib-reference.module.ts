import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibReferenceRoutingModule } from './lib-reference-routing.module';
import { LibReferenceListComponent } from './lib-reference-list/lib-reference-list.component';
import { LibReferenceShareModule } from './lib-reference-share/lib-reference-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LibReferenceListComponent
  ],
  imports: [
    CommonModule,
    LibReferenceRoutingModule,
    LibReferenceShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LibReferenceModule { }
