import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-po-item-share-header',
    templateUrl: './pur-po-item-share-header.component.html',
    styleUrl: './pur-po-item-share-header.component.scss'
})
export class PurPoItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
