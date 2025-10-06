import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WpJoRoutingModule } from './wp-jo-routing.module';
import { WpJoListComponent } from './wp-jo-list/wp-jo-list.component';
import { WpJoShareModule } from './wp-jo-share/wp-jo-share.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';


@NgModule({
  declarations: [
    WpJoListComponent
  ],
  imports: [
    CommonModule,
    WpJoRoutingModule,
    WpJoShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class WpJoModule { }
