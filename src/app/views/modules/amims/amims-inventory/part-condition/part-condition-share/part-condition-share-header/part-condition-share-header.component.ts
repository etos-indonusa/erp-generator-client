import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-part-condition-share-header',
    templateUrl: './part-condition-share-header.component.html',
    styleUrl: './part-condition-share-header.component.scss'
})
export class PartConditionShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
