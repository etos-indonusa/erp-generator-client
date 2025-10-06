import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-work-completed-share-header',
    templateUrl: './work-completed-share-header.component.html',
    styleUrl: './work-completed-share-header.component.scss'
})
export class WorkCompletedShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
