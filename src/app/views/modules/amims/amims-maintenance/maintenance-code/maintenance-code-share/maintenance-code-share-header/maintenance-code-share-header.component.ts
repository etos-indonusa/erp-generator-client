import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-maintenance-code-share-header',
    templateUrl: './maintenance-code-share-header.component.html',
    styleUrl: './maintenance-code-share-header.component.scss'
})
export class MaintenanceCodeShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
