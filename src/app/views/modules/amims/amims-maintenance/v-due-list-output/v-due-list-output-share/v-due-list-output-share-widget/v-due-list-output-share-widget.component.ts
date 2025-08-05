import { Component, Input, SimpleChanges } from '@angular/core';
import { VDueListOutputWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-v-due-list-output-share-widget',
    templateUrl: './v-due-list-output-share-widget.component.html',
    styleUrl: './v-due-list-output-share-widget.component.scss'
})
export class VDueListOutputShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private vDueListOutputWidgetService: VDueListOutputWidgetService,
    ) { }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.reload) {
            if (changes.reload.currentValue != changes.reload.previousValue && changes.reload.currentValue > 1) {
                this.getDataWidget()
            }
        }
    }
 
    ngOnInit(): void {
        this.getDataWidget()
    }

    breadCrumbItems = [
        { label: 'List', active: false }
    ]
    is_loading: boolean = false
    total: number = 0;
    status_urutan: any[] = []
    //[{"type":"count","field":"status_v-due-list-output_site","alias":"total"}, {"type":"max","field":"status_v-due-list-output_site","alias":"status_v-due-list-output_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.vDueListOutputWidgetService
            .vDueListOutputWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_v_due_list_output" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_v_due_list_output'],
                    sortKey: "status_v_due_list_output",
                    sortValue: "ASC"
                }
            })
            .subscribe((data) => {
                this.total = data.total ?? 0;
                this.status_urutan = data.data ?? [] ; 
                this.status_urutan.forEach(x => {
                    this.total = this.total + x.jumlah * 1
                })
                this.is_loading = false;
            });
    }
}
