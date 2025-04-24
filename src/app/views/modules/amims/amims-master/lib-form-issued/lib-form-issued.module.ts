import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibFormIssuedRoutingModule } from './lib-form-issued-routing.module';
import { LibFormIssuedListComponent } from './lib-form-issued-list/lib-form-issued-list.component';
import { LibFormIssuedShareModule } from './lib-form-issued-share/lib-form-issued-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LibFormIssuedListComponent
  ],
  imports: [
    CommonModule,
    LibFormIssuedRoutingModule,
    LibFormIssuedShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LibFormIssuedModule { }
