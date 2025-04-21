import { Component, Input, SimpleChanges } from '@angular/core';
import { EngineerPmtrWidgetService } from 'src/sdk/core/services/engineer-pmtr-widget.service';

@Component({
    selector: 'app-engineer-pmtr-share-widget',
    templateUrl: './engineer-pmtr-share-widget.component.html',
    styleUrl: './engineer-pmtr-share-widget.component.scss'
})
export class EngineerPmtrShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private engineerPmtrWidgetService: EngineerPmtrWidgetService,
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
    //[{"type":"count","field":"status_engineer-pmtr_site","alias":"total"}, {"type":"max","field":"status_engineer-pmtr_site","alias":"status_engineer-pmtr_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.engineerPmtrWidgetService
            .engineerPmtrWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_engineer_pmtr" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_engineer_pmtr'],
                    sortKey: "status_engineer_pmtr",
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
