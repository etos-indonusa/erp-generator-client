import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-aircraft-detail-share-header',
    templateUrl: './aircraft-detail-share-header.component.html',
    styleUrl: './aircraft-detail-share-header.component.scss'
})
export class AircraftDetailShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
