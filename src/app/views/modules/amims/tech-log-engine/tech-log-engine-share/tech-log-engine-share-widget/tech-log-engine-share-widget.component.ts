import { Component, Input, SimpleChanges } from '@angular/core';
import { TechLogEngineWidgetService } from 'src/sdk/core/services/tech-log-engine-widget.service';

@Component({
    selector: 'app-tech-log-engine-share-widget',
    templateUrl: './tech-log-engine-share-widget.component.html',
    styleUrl: './tech-log-engine-share-widget.component.scss'
})
export class TechLogEngineShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private techLogEngineWidgetService: TechLogEngineWidgetService,
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
    //[{"type":"count","field":"status_tech-log-engine_site","alias":"total"}, {"type":"max","field":"status_tech-log-engine_site","alias":"status_tech-log-engine_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.techLogEngineWidgetService
            .techLogEngineWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_tech_log_engine" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_tech_log_engine'],
                    sortKey: "status_tech_log_engine",
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
