import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-inspection-share-header',
    templateUrl: './inspection-share-header.component.html',
    styleUrl: './inspection-share-header.component.scss'
})
export class InspectionShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
