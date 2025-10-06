import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-maintenance-program-share-header',
    templateUrl: './maintenance-program-share-header.component.html',
    styleUrl: './maintenance-program-share-header.component.scss'
})
export class MaintenanceProgramShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
