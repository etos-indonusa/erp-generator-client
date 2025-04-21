import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTdFormSchema } from 'src/sdk/core/form-schema/amims-td.form-schema'; 
import type  { AmimsTdDto } from 'src/sdk/core/models';
import { TdService } from 'src/sdk/core/services';

import { DoctypeService } from 'src/sdk/core/services';
import { UsersService } from 'src/sdk/core/services';

@Component({
    selector: 'app-td-share-add',
    templateUrl: './td-share-add.component.html',
    styleUrl: './td-share-add.component.scss'
})
export class TdShareAddComponent {
    @Input('td') td: AmimsTdDto = {
  idTd: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.td && this.td.idTd) {
        this.form?.patchValue(this.td);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private tdService: TdService,
                        private doctypeService: DoctypeService,
                private usersService: UsersService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTdFormSchema, {
            kodeTd: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'Td');

                            this.getAllDoctype();
                    this.getAllUser();
                    }
    
    listDoctype: any[] = [];
    
    listUser: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllDoctype() {
    this.doctypeService.doctypeControllerFindAll().subscribe(
      data => this.listDoctype = data.data ?? []
    );
  }
        getAllUser() {
    this.usersService.usersControllerFindAll().subscribe(
      data => this.listUser = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsTdFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.td.idTd ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.tdService.tdControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data td berhasil disimpan.');
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
        this.tdService.tdControllerUpdate({ id: this.td.idTd, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data td berhasil diperbarui.');
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
