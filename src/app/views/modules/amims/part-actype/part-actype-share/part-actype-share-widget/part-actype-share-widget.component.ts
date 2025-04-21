import { Component, Input, SimpleChanges } from '@angular/core';
import { PartActypeWidgetService } from 'src/sdk/core/services/part-actype-widget.service';

@Component({
    selector: 'app-part-actype-share-widget',
    templateUrl: './part-actype-share-widget.component.html',
    styleUrl: './part-actype-share-widget.component.scss'
})
export class PartActypeShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partActypeWidgetService: PartActypeWidgetService,
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
    //[{"type":"count","field":"status_part-actype_site","alias":"total"}, {"type":"max","field":"status_part-actype_site","alias":"status_part-actype_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partActypeWidgetService
            .partActypeWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_actype" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_actype'],
                    sortKey: "status_part_actype",
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
