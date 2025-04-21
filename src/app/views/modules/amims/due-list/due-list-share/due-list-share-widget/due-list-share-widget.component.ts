import { Component, Input, SimpleChanges } from '@angular/core';
import { DueListWidgetService } from 'src/sdk/core/services/due-list-widget.service';

@Component({
    selector: 'app-due-list-share-widget',
    templateUrl: './due-list-share-widget.component.html',
    styleUrl: './due-list-share-widget.component.scss'
})
export class DueListShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private dueListWidgetService: DueListWidgetService,
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
    //[{"type":"count","field":"status_due-list_site","alias":"total"}, {"type":"max","field":"status_due-list_site","alias":"status_due-list_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.dueListWidgetService
            .dueListWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_due_list" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_due_list'],
                    sortKey: "status_due_list",
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
