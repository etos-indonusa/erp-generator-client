import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-td-type-share-header',
    templateUrl: './td-type-share-header.component.html',
    styleUrl: './td-type-share-header.component.scss'
})
export class TdTypeShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
