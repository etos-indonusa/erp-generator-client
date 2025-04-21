import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pur-return-share-header',
    templateUrl: './pur-return-share-header.component.html',
    styleUrl: './pur-return-share-header.component.scss'
})
export class PurReturnShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
