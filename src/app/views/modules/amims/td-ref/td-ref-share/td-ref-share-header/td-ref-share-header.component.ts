import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-td-ref-share-header',
    templateUrl: './td-ref-share-header.component.html',
    styleUrl: './td-ref-share-header.component.scss'
})
export class TdRefShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
