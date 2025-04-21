import { Component, Input, SimpleChanges } from '@angular/core';
import { DueListOutputWidgetService } from 'src/sdk/core/services/due-list-output-widget.service';

@Component({
    selector: 'app-due-list-output-share-widget',
    templateUrl: './due-list-output-share-widget.component.html',
    styleUrl: './due-list-output-share-widget.component.scss'
})
export class DueListOutputShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private dueListOutputWidgetService: DueListOutputWidgetService,
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
    //[{"type":"count","field":"status_due-list-output_site","alias":"total"}, {"type":"max","field":"status_due-list-output_site","alias":"status_due-list-output_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.dueListOutputWidgetService
            .dueListOutputWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_due_list_output" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_due_list_output'],
                    sortKey: "status_due_list_output",
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
