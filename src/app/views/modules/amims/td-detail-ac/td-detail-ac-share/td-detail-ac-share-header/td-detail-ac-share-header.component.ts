import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-td-detail-ac-share-header',
    templateUrl: './td-detail-ac-share-header.component.html',
    styleUrl: './td-detail-ac-share-header.component.scss'
})
export class TdDetailAcShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
