import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-due-list-share-header',
    templateUrl: './due-list-share-header.component.html',
    styleUrl: './due-list-share-header.component.scss'
})
export class DueListShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
