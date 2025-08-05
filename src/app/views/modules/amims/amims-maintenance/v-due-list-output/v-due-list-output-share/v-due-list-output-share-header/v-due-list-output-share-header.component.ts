import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-v-due-list-output-share-header',
    templateUrl: './v-due-list-output-share-header.component.html',
    styleUrl: './v-due-list-output-share-header.component.scss'
})
export class VDueListOutputShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
