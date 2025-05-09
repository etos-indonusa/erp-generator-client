import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteListComponent } from './site-list/site-list.component'; 
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { SiteShareModule } from './site-share/site-share.module';


@NgModule({
  declarations: [
    SiteListComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    SiteShareModule,
    AntSimpleModule,
    TampilanModule
  ]
})
export class SiteModule { }
