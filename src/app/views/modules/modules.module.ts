import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
 

import { TranslateService } from '@ngx-translate/core';




@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        ModulesRoutingModule 
    ]
})
export class ModulesModule { 
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('id');
        translate.use('id'); // ini yang mengaktifkan langsung
    }
}
