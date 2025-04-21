import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-store-transfer-share-header',
    templateUrl: './store-transfer-share-header.component.html',
    styleUrl: './store-transfer-share-header.component.scss'
})
export class StoreTransferShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
