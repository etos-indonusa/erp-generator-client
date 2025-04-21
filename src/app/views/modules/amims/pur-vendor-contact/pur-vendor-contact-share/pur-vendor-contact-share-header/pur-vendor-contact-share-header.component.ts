import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-vendor-contact-share-header',
    templateUrl: './pur-vendor-contact-share-header.component.html',
    styleUrl: './pur-vendor-contact-share-header.component.scss'
})
export class PurVendorContactShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
