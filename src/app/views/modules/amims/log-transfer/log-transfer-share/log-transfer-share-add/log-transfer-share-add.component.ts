import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsLogTransferFormSchema } from 'de-sdk-core/form-schema/amims-log-transfer.form-schema'; 
import type { AmimsLogTransferDto } from 'de-sdk-core/models';
import { LogTransferService } from 'de-sdk-core/services';

import { MpartService } from 'de-sdk-core/services';
import { UsersService } from 'de-sdk-core/services';
 
@Component({
    selector: 'app-log-transfer-share-add',
    templateUrl: './log-transfer-share-add.component.html',
    styleUrl: './log-transfer-share-add.component.scss'
})
export class LogTransferShareAddComponent {
    @Input('logTransfer') logTransfer: AmimsLogTransferDto = {
  idLogTransfer: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.logTransfer && this.logTransfer.idLogTransfer) {
        this.form?.patchValue(this.logTransfer);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private logTransferService: LogTransferService,
                        private mpartService: MpartService,
                private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsLogTransferFormSchema, {
            // kodeLogTransfer: [Validators.minLength(3), Validators.maxLength(3)],
            // catatan: [Validators.maxLength(200)],
        },'LogTransfer');

                            this.getAllMpart();
                    this.getAllUser();
                    }
    
    listMpart: any[] = [];
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsLogTransferFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.logTransfer.idLogTransfer ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.logTransferService.logTransferControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logTransfer berhasil disimpan.');
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
        this.logTransferService.logTransferControllerUpdate({ id: this.logTransfer.idLogTransfer, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data logTransfer berhasil diperbarui.');
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
