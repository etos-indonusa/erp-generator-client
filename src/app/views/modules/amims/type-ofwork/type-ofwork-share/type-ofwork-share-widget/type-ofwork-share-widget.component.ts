import { Component, Input, SimpleChanges } from '@angular/core';
import { TypeOfworkWidgetService } from 'de-sdk-core/lib/services/type-ofwork-widget.service';

@Component({
    selector: 'app-type-ofwork-share-widget',
    templateUrl: './type-ofwork-share-widget.component.html',
    styleUrl: './type-ofwork-share-widget.component.scss'
})
export class TypeOfworkShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private typeOfworkWidgetService: TypeOfworkWidgetService,
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
    //[{"type":"count","field":"status_type-ofwork_site","alias":"total"}, {"type":"max","field":"status_type-ofwork_site","alias":"status_type-ofwork_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.typeOfworkWidgetService
            .typeOfworkWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_type_ofwork" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_type_ofwork'],
                    sortKey: "status_type_ofwork",
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
