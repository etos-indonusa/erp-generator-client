import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-part-condition-list',
    templateUrl: './part-condition-list.component.html',
    styleUrl: './part-condition-list.component.scss'
})
export class PartConditionListComponent {
    constructor(
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.queryParamMap.subscribe(
            data => {
                if (data.get('status')) {
                    this.status = data.get('status') == 'semua' ? null : data.get('status');
                }
            }
        );
    }

    status: string | null = null;
    filter: any = {};

    getFilter($event: any) {
        this.filter = $event;
        this.getReload();
    }

    reload = 1;
    getReload() {
        this.reload = this.reload + 1;
    }
}
