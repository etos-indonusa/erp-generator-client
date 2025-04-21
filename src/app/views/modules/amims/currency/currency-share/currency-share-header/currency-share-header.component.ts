import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-currency-share-header',
    templateUrl: './currency-share-header.component.html',
    styleUrl: './currency-share-header.component.scss'
})
export class CurrencyShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
