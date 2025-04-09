import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/libs/auth/store/auth.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(
        private fb: FormBuilder, 
        private route: ActivatedRoute, 
        private store: Store

    ) { }
    returnUrl:any = null
    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['arivin29@yahoo.co.id', [Validators.required, Validators.email]],
            password: ['Pantek123', [Validators.required, Validators.minLength(6)]],
            rememberMe: [false],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onLoggedin(e: Event): void {
        e.preventDefault();
        if (this.loginForm.invalid) {
            // Tampilkan notifikasi error atau handle sesuai kebutuhan
            console.error('Form invalid', this.loginForm.errors);
            return;
        }
        // simpan returnUrl dulu sebelum login
        localStorage.setItem('returnUrl', this.returnUrl);
        const { email, password } = this.loginForm.value;
        this.store.dispatch(login({ email, password }));
    }

    // Helper getters for template
    get emailControl() {
        return this.loginForm.get('email');
    }

    get passwordControl() {
        return this.loginForm.get('password');
    }

}
