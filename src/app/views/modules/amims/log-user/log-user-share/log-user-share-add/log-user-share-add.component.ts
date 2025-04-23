import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLogUserFormSchema } from 'de-sdk-core'; 
import type { AmimsLogUserDto } from 'de-sdk-core';
import { LogUserService } from 'de-sdk-core';

import { UsersService } from 'de-sdk-core';
 
@Component({
    selector: 'app-log-user-share-add',
    templateUrl: './log-user-share-add.component.html',
    styleUrl: './log-user-share-add.component.scss'
})
export class LogUserShareAddComponent {
    @Input('logUser') logUser: AmimsLogUserDto = {
  idLogUser: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.logUser && this.logUser.idLogUser) {
        this.form?.patchValue(this.logUser);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private logUserService: LogUserService,
                        private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLogUserFormSchema, {
            // kodeLogUser: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'LogUser');

                            this.getAllUser();
                    }
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsLogUserFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.logUser.idLogUser ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.logUserService.logUserControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logUser berhasil disimpan.');
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
        this.logUserService.logUserControllerUpdate({ id: this.logUser.idLogUser, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logUser berhasil diperbarui.');
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
