import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-pr-item-share-header',
    templateUrl: './pur-pr-item-share-header.component.html',
    styleUrl: './pur-pr-item-share-header.component.scss'
})
export class PurPrItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
