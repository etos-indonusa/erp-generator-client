import { Component, Input, SimpleChanges } from '@angular/core';
import { PartConditionWidgetService } from 'src/sdk/core/services/part-condition-widget.service';

@Component({
    selector: 'app-part-condition-share-widget',
    templateUrl: './part-condition-share-widget.component.html',
    styleUrl: './part-condition-share-widget.component.scss'
})
export class PartConditionShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partConditionWidgetService: PartConditionWidgetService,
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
    //[{"type":"count","field":"status_part-condition_site","alias":"total"}, {"type":"max","field":"status_part-condition_site","alias":"status_part-condition_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partConditionWidgetService
            .partConditionWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_condition" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_condition'],
                    sortKey: "status_part_condition",
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
