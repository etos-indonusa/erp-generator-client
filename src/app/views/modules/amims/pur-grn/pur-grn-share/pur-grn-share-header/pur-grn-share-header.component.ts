import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-grn-share-header',
    templateUrl: './pur-grn-share-header.component.html',
    styleUrl: './pur-grn-share-header.component.scss'
})
export class PurGrnShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
