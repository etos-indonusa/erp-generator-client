import { Component, Input, SimpleChanges } from '@angular/core';
import { PartCategoryWidgetService } from 'de-sdk-core';

@Component({
    selector: 'app-part-category-share-widget',
    templateUrl: './part-category-share-widget.component.html',
    styleUrl: './part-category-share-widget.component.scss'
})
export class PartCategoryShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private partCategoryWidgetService: PartCategoryWidgetService,
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
    //[{"type":"count","field":"status_part-category_site","alias":"total"}, {"type":"max","field":"status_part-category_site","alias":"status_part-category_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.partCategoryWidgetService
            .partCategoryWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_part_category" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_part_category'],
                    sortKey: "status_part_category",
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
