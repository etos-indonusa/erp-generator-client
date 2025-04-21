import { Component, Input, SimpleChanges } from '@angular/core';
import { TechLogJoWidgetService } from 'src/sdk/core/services/tech-log-jo-widget.service';

@Component({
    selector: 'app-tech-log-jo-share-widget',
    templateUrl: './tech-log-jo-share-widget.component.html',
    styleUrl: './tech-log-jo-share-widget.component.scss'
})
export class TechLogJoShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private techLogJoWidgetService: TechLogJoWidgetService,
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
    //[{"type":"count","field":"status_tech-log-jo_site","alias":"total"}, {"type":"max","field":"status_tech-log-jo_site","alias":"status_tech-log-jo_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.techLogJoWidgetService
            .techLogJoWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_tech_log_jo" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_tech_log_jo'],
                    sortKey: "status_tech_log_jo",
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
