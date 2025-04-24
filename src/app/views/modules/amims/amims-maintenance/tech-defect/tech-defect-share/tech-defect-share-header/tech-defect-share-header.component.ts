import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-tech-defect-share-header',
    templateUrl: './tech-defect-share-header.component.html',
    styleUrl: './tech-defect-share-header.component.scss'
})
export class TechDefectShareHeaderComponent {
    @Input('data') data: any = {}
    constructor() { }

    ngOnInit(): void {
    }
}
