import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-return-item-share-header',
    templateUrl: './pur-return-item-share-header.component.html',
    styleUrl: './pur-return-item-share-header.component.scss'
})
export class PurReturnItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
