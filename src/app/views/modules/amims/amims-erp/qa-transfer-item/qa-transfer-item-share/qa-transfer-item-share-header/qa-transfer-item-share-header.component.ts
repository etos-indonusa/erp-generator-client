import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-qa-transfer-item-share-header',
    templateUrl: './qa-transfer-item-share-header.component.html',
    styleUrl: './qa-transfer-item-share-header.component.scss'
})
export class QaTransferItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
