import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-unschedule-maintenance-share-header',
    templateUrl: './unschedule-maintenance-share-header.component.html',
    styleUrl: './unschedule-maintenance-share-header.component.scss'
})
export class UnscheduleMaintenanceShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
