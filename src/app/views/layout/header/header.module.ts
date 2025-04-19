import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderLayoutModeComponent } from './header-layout-mode/header-layout-mode.component';
import { HeaderBahasaComponent } from './header-bahasa/header-bahasa.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderMailComponent } from './header-mail/header-mail.component';

const COM = [
    HeaderLayoutModeComponent,
    HeaderBahasaComponent,
    HeaderMailComponent
]

@NgModule({
    declarations: [
        ...COM
    ],
    exports: [
        ...COM
    ],
    imports: [
        CommonModule,
        AntSimpleModule,
        TampilanModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        NgbDropdownModule
    ]
})
export class HeaderModule { }
