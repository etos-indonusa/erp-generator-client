import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-pr-share-header',
    templateUrl: './pur-pr-share-header.component.html',
    styleUrl: './pur-pr-share-header.component.scss'
})
export class PurPrShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
