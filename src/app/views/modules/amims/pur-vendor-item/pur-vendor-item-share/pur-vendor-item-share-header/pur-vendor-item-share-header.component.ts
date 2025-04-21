import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-vendor-item-share-header',
    templateUrl: './pur-vendor-item-share-header.component.html',
    styleUrl: './pur-vendor-item-share-header.component.scss'
})
export class PurVendorItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
