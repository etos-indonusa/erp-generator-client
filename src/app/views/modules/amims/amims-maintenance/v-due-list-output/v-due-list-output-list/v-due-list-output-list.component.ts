import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-v-due-list-output-list',
    templateUrl: './v-due-list-output-list.component.html',
    styleUrl: './v-due-list-output-list.component.scss'
})
export class VDueListOutputListComponent {
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
