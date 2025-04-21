import { Component, Input, SimpleChanges } from '@angular/core';
import { LifeTimeLimitWidgetService } from 'src/sdk/core/services/life-time-limit-widget.service';

@Component({
    selector: 'app-life-time-limit-share-widget',
    templateUrl: './life-time-limit-share-widget.component.html',
    styleUrl: './life-time-limit-share-widget.component.scss'
})
export class LifeTimeLimitShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private lifeTimeLimitWidgetService: LifeTimeLimitWidgetService,
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
    //[{"type":"count","field":"status_life-time-limit_site","alias":"total"}, {"type":"max","field":"status_life-time-limit_site","alias":"status_life-time-limit_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.lifeTimeLimitWidgetService
            .lifeTimeLimitWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_life_time_limit" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_life_time_limit'],
                    sortKey: "status_life_time_limit",
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
