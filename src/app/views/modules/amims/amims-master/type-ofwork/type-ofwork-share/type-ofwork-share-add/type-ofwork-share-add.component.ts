import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsTypeOfworkFormSchema } from 'de-sdk-core'; 
import type  { AmimsTypeOfworkDto } from 'de-sdk-core';
import { TypeOfworkService } from 'de-sdk-core';


@Component({
    selector: 'app-type-ofwork-share-add',
    templateUrl: './type-ofwork-share-add.component.html',
    styleUrl: './type-ofwork-share-add.component.scss'
})
export class TypeOfworkShareAddComponent {
    @Input('typeOfwork') typeOfwork: AmimsTypeOfworkDto = {
  idTypeOfwork: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.typeOfwork && this.typeOfwork.idTypeOfwork) {
        this.form?.patchValue(this.typeOfwork);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private typeOfworkService: TypeOfworkService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsTypeOfworkFormSchema, {
            kodeTypeOfwork: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'TypeOfwork');

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(AmimsTypeOfworkFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.typeOfwork.idTypeOfwork ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.typeOfworkService.typeOfworkControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data typeOfwork berhasil disimpan.');
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
        this.typeOfworkService.typeOfworkControllerUpdate({ id: this.typeOfwork.idTypeOfwork, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data typeOfwork berhasil diperbarui.');
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
