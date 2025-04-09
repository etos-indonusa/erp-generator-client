import { NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { TampilanModule } from 'src/app/shared/tampilan.module';
import { AntSimpleModule } from 'src/app/shared/ant-simple.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from '../pages/auth/register/register.component';


@NgModule({
    declarations: [
        LoginComponent 
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        TampilanModule,
        AntSimpleModule,
        NgStyle
    ]
})
export class AuthModule { }
