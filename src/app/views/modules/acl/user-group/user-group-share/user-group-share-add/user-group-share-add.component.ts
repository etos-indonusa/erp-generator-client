import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AclUserGroupFormSchema } from 'de-sdk-core/lib/form-schema/acl-user-group.form-schema'; 
import type { AclUserGroupDto } from 'de-sdk-core/lib/models';
import { UserGroupService } from 'de-sdk-core/lib/services';

 
@Component({
    selector: 'app-user-group-share-add',
    templateUrl: './user-group-share-add.component.html',
    styleUrl: './user-group-share-add.component.scss'
})
export class UserGroupShareAddComponent {
    @Input('userGroup') userGroup: AclUserGroupDto = {
  idUserGroup: '',
  namaUserGroup: '',
  status: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.userGroup && this.userGroup.idUserGroup) {
        this.form?.patchValue(this.userGroup);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private userGroupService: UserGroupService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AclUserGroupFormSchema, {
            // kodeUserGroup: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'UserGroup');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AclUserGroupFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.userGroup.idUserGroup ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.userGroupService.userGroupControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data userGroup berhasil disimpan.');
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
        this.userGroupService.userGroupControllerUpdate({ id: this.userGroup.idUserGroup, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data userGroup berhasil diperbarui.');
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
