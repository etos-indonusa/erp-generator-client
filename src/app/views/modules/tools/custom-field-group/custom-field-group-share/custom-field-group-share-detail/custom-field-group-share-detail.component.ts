import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { AclService } from 'src/app/services/acl.service';
import { TokenService } from 'src/app/services/token.service';
import { environment } from 'src/environments/environment.prod';
import { ToolsCustomFieldDto, ToolsCustomFieldGroupDto, ToolsCustomFieldGroupReportDto } from 'de-sdk-core';
import { CustomFieldGroupReportService, CustomFieldGroupService, CustomFieldService } from 'de-sdk-core';
import { CustomFieldShareAddComponent } from '../../../custom-field/custom-field-share/custom-field-share-add/custom-field-share-add.component';
import { CustomFieldGroupShareAddComponent } from '../custom-field-group-share-add/custom-field-group-share-add.component';

@Component({
    selector: 'app-custom-field-group-share-detail',
    templateUrl: './custom-field-group-share-detail.component.html',
    styleUrl: './custom-field-group-share-detail.component.scss'
})
export class CustomFieldGroupShareDetailComponent {
    @Input('form-module') fromModule: string // replace dengan id+Nama
    constructor(
        private customFieldGroupReportService: CustomFieldGroupReportService,
        private customFieldGroupService: CustomFieldGroupService,
        private customFieldService: CustomFieldService,
        private cd: ChangeDetectorRef,
        private acl: AclService,
        private drawerService: NzDrawerService,
        private tokenService: TokenService,

        /* tambahkan disnini untuk sub lainnya */
        /* tambahkan disnini untuk sub lainnya */
    ) { }

    groups: ToolsCustomFieldGroupDto[] = [];
    fieldsMap: { [groupId: string]: ToolsCustomFieldDto[] } = {};


    async ngOnInit() {
        this.getGroup()
    }

    async getGroup() {
        const result = await this.customFieldGroupService.customFieldGroupControllerFindAll(
            { filter: JSON.stringify({ modul: this.fromModule }) }
        ).toPromise();
        this.groups = result?.data || [];

        for (const group of this.groups) {
            const fields = await this.customFieldService.customFieldControllerFindAll({ filter: JSON.stringify({ idCustomFieldGroup: group.idCustomFieldGroup }) }).toPromise();
            this.fieldsMap[group.idCustomFieldGroup] = fields?.data || [];
        }
        this.cd.detectChanges();

    }

    getFields(groupId: string): ToolsCustomFieldDto[] {
        return (this.fieldsMap[groupId] || []).slice().sort((a, b) => (a.urutan ?? 0) - (b.urutan ?? 0)) || [];
    }

    addGroup() {
        const drawerRef = this.drawerService.create<CustomFieldGroupShareAddComponent, {
        }, {

        }>({
            nzTitle: 'Group',
            nzContent: CustomFieldGroupShareAddComponent,
            nzContentParams: {
                fromModule: this.fromModule,
            },
            nzWidth: (500) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.getGroup()
        });
    }

    addField(group: ToolsCustomFieldGroupDto) {

        const drawerRef = this.drawerService.create<CustomFieldShareAddComponent, {
        }, {

        }>({
            nzTitle: 'Custum Field',
            nzContent: CustomFieldShareAddComponent,
            nzContentParams: {
                idCustomFieldGroup: group.idCustomFieldGroup,
            },
            nzWidth: (900) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.getGroup()
        });
    }

    editField(field: ToolsCustomFieldDto) {
        const drawerRef = this.drawerService.create<CustomFieldShareAddComponent, {
        }, {

        }>({
            nzTitle: 'Custum Field',
            nzContent: CustomFieldShareAddComponent,
            nzContentParams: {
                idCustomFieldGroup: field.idCustomFieldGroup,
                customField: field
            },
            nzWidth: (900) + 'px',
        });
        drawerRef.afterOpen.subscribe(() => {
            console.log('Drawer(Component) open');
        });
        drawerRef.afterClose.subscribe(data => {
            this.getGroup()
        });
    }

    deleteField(field: ToolsCustomFieldDto) {
        console.log('Hapus Field', field);
        this.customFieldService.customFieldControllerRemove({id:field.idCustomField}).subscribe(
            data =>{
                this.getGroup()
            }
        )
    }

}
