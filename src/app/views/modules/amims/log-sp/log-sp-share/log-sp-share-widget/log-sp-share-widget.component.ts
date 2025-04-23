import { Component, Input, SimpleChanges } from '@angular/core';
import { LogSpWidgetService } from 'de-sdk-core/lib/services/log-sp-widget.service';

@Component({
    selector: 'app-log-sp-share-widget',
    templateUrl: './log-sp-share-widget.component.html',
    styleUrl: './log-sp-share-widget.component.scss'
})
export class LogSpShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private logSpWidgetService: LogSpWidgetService,
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
    //[{"type":"count","field":"status_log-sp_site","alias":"total"}, {"type":"max","field":"status_log-sp_site","alias":"status_log-sp_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.logSpWidgetService
            .logSpWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_log_sp" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_log_sp'],
                    sortKey: "status_log_sp",
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
