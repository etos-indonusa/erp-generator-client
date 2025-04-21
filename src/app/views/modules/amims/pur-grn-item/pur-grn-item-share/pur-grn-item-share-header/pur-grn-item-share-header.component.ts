import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-grn-item-share-header',
    templateUrl: './pur-grn-item-share-header.component.html',
    styleUrl: './pur-grn-item-share-header.component.scss'
})
export class PurGrnItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
