import { Component, Input, SimpleChanges } from '@angular/core';
import { LogTsnTsoWidgetService } from 'de-sdk-core/services/log-tsn-tso-widget.service';

@Component({
    selector: 'app-log-tsn-tso-share-widget',
    templateUrl: './log-tsn-tso-share-widget.component.html',
    styleUrl: './log-tsn-tso-share-widget.component.scss'
})
export class LogTsnTsoShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private logTsnTsoWidgetService: LogTsnTsoWidgetService,
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
    //[{"type":"count","field":"status_log-tsn-tso_site","alias":"total"}, {"type":"max","field":"status_log-tsn-tso_site","alias":"status_log-tsn-tso_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.logTsnTsoWidgetService
            .logTsnTsoWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_log_tsn_tso" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_log_tsn_tso'],
                    sortKey: "status_log_tsn_tso",
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
