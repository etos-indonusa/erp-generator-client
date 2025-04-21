import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-discrepancies-share-header',
    templateUrl: './tech-discrepancies-share-header.component.html',
    styleUrl: './tech-discrepancies-share-header.component.scss'
})
export class TechDiscrepanciesShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
