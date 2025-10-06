import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WpRoutingModule } from './wp-routing.module';
import { WpListComponent } from './wp-list/wp-list.component';
import { WpShareModule } from './wp-share/wp-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    WpListComponent
  ],
  imports: [
    CommonModule,
    WpRoutingModule,
    WpShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class WpModule { }
