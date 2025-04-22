import { Component, Input, SimpleChanges } from '@angular/core';
import { PartFigureIndexWidgetService } from 'de-sdk-core/services/part-figure-index-widget.service';

@Component({
    selector: 'app-part-figure-index-share-widget',
    templateUrl: './part-figure-index-share-widget.component.html',
    styleUrl: './part-figure-index-share-widget.component.scss'
})
export class PartFigureIndexShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partFigureIndexWidgetService: PartFigureIndexWidgetService,
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
    //[{"type":"count","field":"status_part-figure-index_site","alias":"total"}, {"type":"max","field":"status_part-figure-index_site","alias":"status_part-figure-index_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partFigureIndexWidgetService
            .partFigureIndexWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_figure_index" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_figure_index'],
                    sortKey: "status_part_figure_index",
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
