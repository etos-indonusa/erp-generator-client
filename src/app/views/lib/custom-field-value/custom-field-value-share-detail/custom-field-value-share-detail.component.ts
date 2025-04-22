import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import {
    ToolsCustomFieldDto,
    ToolsCustomFieldGroupDto,
    ToolsCustomFieldValueReportDto
} from 'de-sdk-core/models';
import {
    CustomFieldGroupService,
    CustomFieldService,
    CustomFieldValueReportService,
    CustomFieldValueService
} from 'de-sdk-core/services';
import { CustomFieldValueShareAddComponent } from '../custom-field-value-share-add/custom-field-value-share-add.component';

@Component({
    selector: 'lib-custom-field',
    templateUrl: './custom-field-value-share-detail.component.html',
    styleUrl: './custom-field-value-share-detail.component.scss'
})
export class CustomFieldValueShareDetailComponent {
    @Input('from-module-id') fromModuleId!: any;
    @Input('from-module') fromModule!: any;

    constructor(
        private customFieldGroupService: CustomFieldGroupService,
        private customFieldService: CustomFieldService,
        private customFieldValueReportService: CustomFieldValueReportService,
        private customFieldValueService: CustomFieldValueService,
        private acl: AclService,
        private drawerService: NzDrawerService,
        private tokenService: TokenService,
        private cd: ChangeDetectorRef,
    ) { }

    is_loading = false;
    reload = 0;

    listGroup: ToolsCustomFieldGroupDto[] = [];
    fieldsMap: Record<string, ToolsCustomFieldDto[]> = {};
    valueMap: Record<string, any> = {};

    ngOnInit(): void {
        this.loadAll();
    }

    loadAll(): void {
        this.is_loading = true;

        // Ambil group
        this.customFieldGroupService.customFieldGroupControllerFindAll({
            filter: JSON.stringify({ modul: this.fromModule })
        }).subscribe({
            next: groupRes => {
                this.listGroup = groupRes.data || [];

                const groupIds = this.listGroup.map(g => g.idCustomFieldGroup);

                // Ambil field setelah group
                this.customFieldService.customFieldControllerFindAll({
                    filter: JSON.stringify({
                        idCustomFieldGroup: { in: groupIds }
                    })
                }).subscribe({
                    next: fieldRes => {
                        const fields = fieldRes.data || [];
                        this.fieldsMap = fields.reduce((acc: any, field: ToolsCustomFieldDto) => {
                            const groupId: any = field.idCustomFieldGroup;
                            if (!acc[groupId]) acc[groupId] = [];
                            acc[groupId].push(field);
                            return acc;
                        }, {});

                        // Ambil value terakhir
                        this.getData();
                    },
                    error: err => {
                        console.error('Gagal mengambil field', err);
                        this.is_loading = false;
                    }
                });
            },
            error: err => {
                console.error('Gagal mengambil group', err);
                this.is_loading = false;
            }
        });
    }

    getData(): void {
        this.customFieldValueService.customFieldValueControllerFindAll({

            filter: JSON.stringify({
                forModule: this.fromModule,
                forModuleId: this.fromModuleId
            })

        }).subscribe({
            next: (res) => {
                this.valueMap = (res.data || []).reduce((acc, val) => {
                    acc[val.idCustomField] = val.nilai;
                    return acc;
                }, {} as Record<string, any>);
                this.cd.detectChanges();
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
        const keys = Object.keys(this.fieldsMap);
        if (!this.fieldsMap[groupId] && keys.length > 0) {
            console.warn(`⚠️ Group ID '${groupId}' tidak ditemukan di fieldsMap`, keys);
        }

        let data = (this.fieldsMap[groupId] || []).slice().sort((a, b) => (a.urutan ?? 0) - (b.urutan ?? 0));
     
        return data
    }

    editGroup(group: ToolsCustomFieldGroupDto): void {
        this.drawerService.create<CustomFieldValueShareAddComponent, {
        }, void>({
            nzTitle: `Update ${group.namaGroup}`,
            nzContent: CustomFieldValueShareAddComponent,
            nzContentParams: {
                group: group,
                idCustomFieldGroup: group.idCustomFieldGroup,
                modulId: this.fromModuleId
            },
            nzWidth: 720
        }).afterClose.subscribe(() => {
            this.getData();
        });
    }
}
