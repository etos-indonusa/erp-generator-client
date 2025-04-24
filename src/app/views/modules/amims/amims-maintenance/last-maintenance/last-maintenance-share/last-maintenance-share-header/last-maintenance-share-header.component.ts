import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-last-maintenance-share-header',
    templateUrl: './last-maintenance-share-header.component.html',
    styleUrl: './last-maintenance-share-header.component.scss'
})
export class LastMaintenanceShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
