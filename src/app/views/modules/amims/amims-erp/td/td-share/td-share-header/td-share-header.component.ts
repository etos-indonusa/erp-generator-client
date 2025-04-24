import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-td-share-header',
    templateUrl: './td-share-header.component.html',
    styleUrl: './td-share-header.component.scss'
})
export class TdShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
