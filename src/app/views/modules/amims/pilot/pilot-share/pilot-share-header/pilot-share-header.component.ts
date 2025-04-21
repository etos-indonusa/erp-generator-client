import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-pilot-share-header',
    templateUrl: './pilot-share-header.component.html',
    styleUrl: './pilot-share-header.component.scss'
})
export class PilotShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
