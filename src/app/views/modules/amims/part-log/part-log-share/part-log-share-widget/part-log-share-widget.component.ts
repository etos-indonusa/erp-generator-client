import { Component, Input, SimpleChanges } from '@angular/core';
import { PartLogWidgetService } from 'de-sdk-core/lib/services/part-log-widget.service';

@Component({
    selector: 'app-part-log-share-widget',
    templateUrl: './part-log-share-widget.component.html',
    styleUrl: './part-log-share-widget.component.scss'
})
export class PartLogShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partLogWidgetService: PartLogWidgetService,
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
    //[{"type":"count","field":"status_part-log_site","alias":"total"}, {"type":"max","field":"status_part-log_site","alias":"status_part-log_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partLogWidgetService
            .partLogWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_log" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_log'],
                    sortKey: "status_part_log",
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
