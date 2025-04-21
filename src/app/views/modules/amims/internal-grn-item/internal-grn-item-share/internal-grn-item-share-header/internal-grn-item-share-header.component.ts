import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-internal-grn-item-share-header',
    templateUrl: './internal-grn-item-share-header.component.html',
    styleUrl: './internal-grn-item-share-header.component.scss'
})
export class InternalGrnItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
