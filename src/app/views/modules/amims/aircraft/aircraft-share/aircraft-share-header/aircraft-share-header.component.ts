import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-aircraft-share-header',
    templateUrl: './aircraft-share-header.component.html',
    styleUrl: './aircraft-share-header.component.scss'
})
export class AircraftShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
