import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-engineer-pmtr-item-share-header',
    templateUrl: './engineer-pmtr-item-share-header.component.html',
    styleUrl: './engineer-pmtr-item-share-header.component.scss'
})
export class EngineerPmtrItemShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
