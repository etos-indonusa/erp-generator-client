import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-condition-monitoring-share-header',
    templateUrl: './condition-monitoring-share-header.component.html',
    styleUrl: './condition-monitoring-share-header.component.scss'
})
export class ConditionMonitoringShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
