import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-due-list-output-share-header',
    templateUrl: './due-list-output-share-header.component.html',
    styleUrl: './due-list-output-share-header.component.scss'
})
export class DueListOutputShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
