import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AclUsersFormSchema } from 'de-sdk-core/lib/form-schema/acl-users.form-schema';
import type { AclUsersDto } from 'de-sdk-core/lib/models';
import { UsersService } from 'de-sdk-core/lib/services';

import { UserGroupService } from 'de-sdk-core/lib/services';

@Component({
    selector: 'app-users-share-add',
    templateUrl: './users-share-add.component.html',
    styleUrl: './users-share-add.component.scss'
})
export class UsersShareAddComponent {
    @Input('users') users: AclUsersDto = {
        email: '',
        idUsers: '',
        password: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.users && this.users.idUsers) {
            this.form?.patchValue(this.users);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private usersService: UsersService,
        private cd: ChangeDetectorRef,
        private userGroupService: UserGroupService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AclUsersFormSchema, {
        }, 'Users');
        this.cd.detectChanges() 
        setTimeout(() => {
            this.users.password = 'xxxxxxxxxx';
            this.form?.patchValue(this.users);
        },100);
        this.getAllUserGroup();
        
    }

    listUserGroup: any[] = [];


    // untuk fungsi get ALL relation
    getAllUserGroup() {
        this.userGroupService.userGroupControllerFindAll().subscribe(
            data => this.listUserGroup = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AclUsersFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.users.idUsers ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.usersService.usersControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data users berhasil disimpan.');
                this.nzDrawerRef.close(data);
            },
            error: () => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.');
            },
            complete: () => (this.is_loading = false)
        });
    }

    update() {
        let val = this.form.value
        val.password = null;

        this.is_loading = true;
        this.usersService.usersControllerUpdate({ id: this.users.idUsers, body: val }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data users berhasil diperbarui.');
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
