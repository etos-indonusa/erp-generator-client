import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-workflow-step-share-header',
    templateUrl: './workflow-step-share-header.component.html',
    styleUrl: './workflow-step-share-header.component.scss'
})
export class WorkflowStepShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
