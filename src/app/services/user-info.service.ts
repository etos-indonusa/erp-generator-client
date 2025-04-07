import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { select, Store } from '@ngrx/store'

const TOKEN_KEY = 'token';
const USER_KEY = 'currentUser';
const CREDENTIAL_KEY = 'credential';

@Injectable({
    providedIn: 'root'
})

export class UserInfoService {

    constructor(
        // private store: Store<any>
    ) { }

    callToGetUser = new BehaviorSubject<boolean>(false);
    getInterupGetUser() {
        return this.callToGetUser.asObservable();
    }

    // user = new BehaviorSubject<any>(null);
    get getUser() {
        // const user = localStorage.getItem(USER_KEY);
        // if (user) {
        //     return JSON.parse(user);
        // }

        return {
            id: '1'
        };


        // return user;
        // const user = JSON.parse(localStorage.getItem('user'))
        // if (user) {
        //     return user;
        // }
        // return null;
    }


}
