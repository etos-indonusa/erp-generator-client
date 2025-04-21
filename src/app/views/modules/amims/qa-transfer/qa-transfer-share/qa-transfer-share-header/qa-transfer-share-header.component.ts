import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-qa-transfer-share-header',
    templateUrl: './qa-transfer-share-header.component.html',
    styleUrl: './qa-transfer-share-header.component.scss'
})
export class QaTransferShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
