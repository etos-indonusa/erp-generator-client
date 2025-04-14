import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-workflow-share-header',
    templateUrl: './workflow-share-header.component.html',
    styleUrl: './workflow-share-header.component.scss'
})
export class WorkflowShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
