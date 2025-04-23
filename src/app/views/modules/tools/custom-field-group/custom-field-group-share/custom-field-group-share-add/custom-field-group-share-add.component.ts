import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ToolsCustomFieldGroupFormSchema } from 'de-sdk-core/lib/form-schema/tools-custom-field-group.form-schema';
import type { AclModuleDto, AclUserGroupDto, ToolsCustomFieldGroupDto } from 'de-sdk-core/lib/models';
import { CustomFieldGroupService, ModuleService, UserGroupService } from 'de-sdk-core/lib/services';


@Component({
    selector: 'app-custom-field-group-share-add',
    templateUrl: './custom-field-group-share-add.component.html',
    styleUrl: './custom-field-group-share-add.component.scss'
})
export class CustomFieldGroupShareAddComponent {
    @Input('customFieldGroup') customFieldGroup: ToolsCustomFieldGroupDto = {
        idCustomFieldGroup: '',
        namaGroup: ''
    };
    @Input('from-module') fromModule: string
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.customFieldGroup && this.customFieldGroup.idCustomFieldGroup) {
            this.form?.patchValue(this.customFieldGroup);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private customFieldGroupService: CustomFieldGroupService,
        private moduleService: ModuleService,
        private userGroupService: UserGroupService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ToolsCustomFieldGroupFormSchema, { 
        }, 'CustomFieldGroup'); 

        // Convert dari string JSON ke array untuk forRole_array
        const raw = this.form.value.forRole;
        if (raw && typeof raw === 'string') {
            try {
                this.form.patchValue({
                    forRole_array: JSON.parse(raw)
                });
            } catch {
                this.form.patchValue({ forRole_array: [] });
            }
        }

        this.getModule();

        this.userGroupService.userGroupControllerFindAll( ).subscribe(res => {
            this.userGroupList = res.data || [];
        });

    }
    userGroupList: AclUserGroupDto[] = [];

    module?: AclModuleDto = {
        idModule: ''
    }
    forRole_array: { default: [] }

    getModule() {
        this.moduleService.moduleControllerFindOne({ id: this.fromModule }).subscribe(
            data => {
                this.module = data?.data
                this.form.patchValue({
                    modul: this.module?.idModule,
                    tableName: this.module?.namaTabel,
                })

            }
        )
    }


    // untuk fungsi get ALL relation

    submit(): void {
        const labelMap = extractLabels(ToolsCustomFieldGroupFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        const roleArray = this.form.value.forRole_array || [];
        this.form.patchValue({
            forRole: JSON.stringify(roleArray)
        });


        this.customFieldGroup.idCustomFieldGroup ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.customFieldGroupService.customFieldGroupControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data customFieldGroup berhasil disimpan.');
                this.nzDrawerRef.close(data);
            },
            error: () => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.');
            },
            complete: () => (this.is_loading = false)
        });
    }

    update() {
        this.is_loading = true;
        this.customFieldGroupService.customFieldGroupControllerUpdate({ id: this.customFieldGroup.idCustomFieldGroup, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data customFieldGroup berhasil diperbarui.');
                this.nzDrawerRef.close(data);
            },
            error: () => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat memperbarui.');
            },
            complete: () => (this.is_loading = false)
        });
    }

    goToBack(data = null) {
        this.nzDrawerRef.close(data);
    }
}
