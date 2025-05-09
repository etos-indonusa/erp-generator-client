import { Component, Input, SimpleChanges } from '@angular/core';
import { TechLogEngineCheckWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-tech-log-engine-check-share-widget',
    templateUrl: './tech-log-engine-check-share-widget.component.html',
    styleUrl: './tech-log-engine-check-share-widget.component.scss'
})
export class TechLogEngineCheckShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private techLogEngineCheckWidgetService: TechLogEngineCheckWidgetService,
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
    //[{"type":"count","field":"status_tech-log-engine-check_site","alias":"total"}, {"type":"max","field":"status_tech-log-engine-check_site","alias":"status_tech-log-engine-check_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.techLogEngineCheckWidgetService
            .techLogEngineCheckWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_tech_log_engine_check" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_tech_log_engine_check'],
                    sortKey: "status_tech_log_engine_check",
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
