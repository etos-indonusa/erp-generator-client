import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibUploadRoutingModule } from './lib-upload-routing.module';
import { LibUploadListComponent } from './lib-upload-list/lib-upload-list.component';
import { LibUploadShareModule } from './lib-upload-share/lib-upload-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    LibUploadListComponent
  ],
  imports: [
    CommonModule,
    LibUploadRoutingModule,
    LibUploadShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class LibUploadModule { }
