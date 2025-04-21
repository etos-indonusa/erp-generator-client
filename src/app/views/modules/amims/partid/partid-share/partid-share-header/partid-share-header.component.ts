import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-partid-share-header',
    templateUrl: './partid-share-header.component.html',
    styleUrl: './partid-share-header.component.scss'
})
export class PartidShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
