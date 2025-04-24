import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-po-share-header',
    templateUrl: './pur-po-share-header.component.html',
    styleUrl: './pur-po-share-header.component.scss'
})
export class PurPoShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
