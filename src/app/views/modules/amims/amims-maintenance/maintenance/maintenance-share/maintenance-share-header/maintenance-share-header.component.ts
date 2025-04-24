import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-maintenance-share-header',
    templateUrl: './maintenance-share-header.component.html',
    styleUrl: './maintenance-share-header.component.scss'
})
export class MaintenanceShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
