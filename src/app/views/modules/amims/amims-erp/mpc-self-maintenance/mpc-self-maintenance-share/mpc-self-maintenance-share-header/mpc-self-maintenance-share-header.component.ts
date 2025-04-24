import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mpc-self-maintenance-share-header',
    templateUrl: './mpc-self-maintenance-share-header.component.html',
    styleUrl: './mpc-self-maintenance-share-header.component.scss'
})
export class MpcSelfMaintenanceShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
