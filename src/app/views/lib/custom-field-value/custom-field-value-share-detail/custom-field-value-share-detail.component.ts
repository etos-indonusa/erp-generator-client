import { Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import { ToolsCustomFieldDto, ToolsCustomFieldGroupDto, ToolsCustomFieldValueReportDto } from 'src/sdk/core/models';
import { CustomFieldValueReportService } from 'src/sdk/core/services';
import { CustomFieldValueShareAddComponent } from '../custom-field-value-share-add/custom-field-value-share-add.component';

@Component({
    selector: 'lib-custom-field',
    templateUrl: './custom-field-value-share-detail.component.html',
    styleUrl: './custom-field-value-share-detail.component.scss'
})
export class CustomFieldValueShareDetailComponent {
    @Input('from-module-id') fromModuleId!: string; // Bisa disesuaikan dengan id+Nama lain
    @Input('from-module') fromModule!: string; // Bisa disesuaikan dengan id+Nama lain

    constructor(
        private customFieldValueReportService: CustomFieldValueReportService,
        private acl: AclService,
        private drawerService: NzDrawerService,
        private tokenService: TokenService,
        /* tambahkan disini untuk sub lainnya */
    ) { }

    ngOnInit(): void {
        this.getData();
    }

    is_loading = false;
    reload = 0;
    customFieldValue: ToolsCustomFieldValueReportDto | null = null;

    valueMap: Record<string, any> = {};

    getData(): void {
        this.is_loading = true;
        this.customFieldValueReportService.customFieldValueReportControllerFindAll({
            body: {
                filter: {
                    forModule: this.fromModule,
                    forModuleId: this.fromModuleId
                }
            }
        }).subscribe({
            next: (res) => {
                this.valueMap = (res.data || []).reduce((acc, val) => {
                    acc[val.idCustomField] = val.nilai;
                    return acc;
                }, {} as Record<string, any>);
            },
            error: (err) => {
                console.error('Failed to load custom field values', err);
            },
            complete: () => {
                this.is_loading = false;
            }
        });
    }

    getFields(groupId: string): ToolsCustomFieldDto[] {
        return (this.fieldsMap[groupId] || []).slice().sort((a, b) => (a.urutan ?? 0) - (b.urutan ?? 0));
    }

    editGroup(group: ToolsCustomFieldGroupDto): void {
        this.drawerService.create<CustomFieldValueShareAddComponent, {
            group: ToolsCustomFieldGroupDto,
            fields: ToolsCustomFieldDto[],
            values: Record<string, any>
        }, void>({
            nzTitle: `Update ${group.namaGroup}`,
            nzContent: CustomFieldValueShareAddComponent,
            nzContentParams: {
                group: group,
                fields: this.getFields(group.idCustomFieldGroup),
                values: this.valueMap
            },
            nzWidth: 720
        }).afterClose.subscribe(() => {
            this.getData();
        });
    }

    groups: ToolsCustomFieldGroupDto[] = []; // assign di luar nanti
    fieldsMap: Record<string, ToolsCustomFieldDto[]> = {}; // assign di luar nanti

}
