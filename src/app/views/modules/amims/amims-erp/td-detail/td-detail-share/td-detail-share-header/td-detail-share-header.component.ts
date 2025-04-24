import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-td-detail-share-header',
    templateUrl: './td-detail-share-header.component.html',
    styleUrl: './td-detail-share-header.component.scss'
})
export class TdDetailShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
