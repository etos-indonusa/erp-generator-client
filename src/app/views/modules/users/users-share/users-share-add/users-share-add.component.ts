import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { UsersFormSchema } from 'src/sdk/core/form-schema/users.form-schema'; 
import type  { UsersDto } from 'src/sdk/core/models';
import { UsersService } from 'src/sdk/core/services';

@Component({
    selector: 'app-users-share-add',
    templateUrl: './users-share-add.component.html',
    styleUrl: './users-share-add.component.scss'
})
export class UsersShareAddComponent {
    @Input('users') users: UsersDto = {
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
        private usersService: UsersService
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, UsersFormSchema, {
            kodeUsers: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        });
    }
    
    listUserGroup: any[] = [];
    

    submit(): void {
        const labelMap = extractLabels(UsersFormSchema);

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
        this.is_loading = true;
        this.usersService.usersControllerUpdate({ id: this.users.idUsers, body: this.form.value }).subscribe({
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
