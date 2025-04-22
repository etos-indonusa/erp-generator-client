import { Component, Input, SimpleChanges } from '@angular/core';
import { CustomFieldGroupWidgetService } from 'de-sdk-core/services/custom-field-group-widget.service';

@Component({
    selector: 'app-custom-field-group-share-widget',
    templateUrl: './custom-field-group-share-widget.component.html',
    styleUrl: './custom-field-group-share-widget.component.scss'
})
export class CustomFieldGroupShareWidgetComponent {
    @Input('filter') filter: any = {};
    @Input('reload') reload: number = 0;
    constructor(
        private customFieldGroupWidgetService: CustomFieldGroupWidgetService,
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
    //[{"type":"count","field":"status_custom-field-group_site","alias":"total"}, {"type":"max","field":"status_custom-field-group_site","alias":"status_custom-field-group_site"}]
    getDataWidget() {
        this.is_loading = true;
        this.customFieldGroupWidgetService
            .customFieldGroupWidgetControllerFindAll({
                body: {
                    filter: this.filter,
                    select: [
                        {
                            type: "count",
                            field:"status_custom_field_group" ,
                            alias: "jumlah" 
                        }
                    ],
                    groupBy:  ['status_custom_field_group'],
                    sortKey: "status_custom_field_group",
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
