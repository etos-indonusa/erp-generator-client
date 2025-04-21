import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-internal-grn-share-header',
    templateUrl: './internal-grn-share-header.component.html',
    styleUrl: './internal-grn-share-header.component.scss'
})
export class InternalGrnShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
