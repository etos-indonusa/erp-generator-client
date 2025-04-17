import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-custom-field-group-share-header',
    templateUrl: './custom-field-group-share-header.component.html',
    styleUrl: './custom-field-group-share-header.component.scss'
})
export class CustomFieldGroupShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
