import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-prcl-share-header',
    templateUrl: './pur-prcl-share-header.component.html',
    styleUrl: './pur-prcl-share-header.component.scss'
})
export class PurPrclShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
