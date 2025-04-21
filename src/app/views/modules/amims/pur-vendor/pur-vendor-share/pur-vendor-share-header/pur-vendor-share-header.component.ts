import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-vendor-share-header',
    templateUrl: './pur-vendor-share-header.component.html',
    styleUrl: './pur-vendor-share-header.component.scss'
})
export class PurVendorShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
