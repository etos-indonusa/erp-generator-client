import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-invoice-share-header',
    templateUrl: './invoice-share-header.component.html',
    styleUrl: './invoice-share-header.component.scss'
})
export class InvoiceShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
