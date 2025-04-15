import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TextTrService {

    constructor() { }

    error(key :string, standart :any=null) { 
        return standart;
    }
}
