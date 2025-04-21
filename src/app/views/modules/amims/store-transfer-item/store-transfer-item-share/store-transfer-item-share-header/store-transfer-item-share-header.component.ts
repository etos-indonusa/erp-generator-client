import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-store-transfer-item-share-header',
    templateUrl: './store-transfer-item-share-header.component.html',
    styleUrl: './store-transfer-item-share-header.component.scss'
})
export class StoreTransferItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
