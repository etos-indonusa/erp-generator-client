import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { ClientFormSchema } from 'src/sdk/core/form-schema/client.form-schema'; 
import type  { ClientDto } from 'src/sdk/core/models';
import { ClientService } from 'src/sdk/core/services';


@Component({
    selector: 'app-client-share-add',
    templateUrl: './client-share-add.component.html',
    styleUrl: './client-share-add.component.scss'
})
export class ClientShareAddComponent {
    @Input('client') client: ClientDto = {
  idClient: '',
  namaResmi: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.client && this.client.idClient) {
        this.form?.patchValue(this.client);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private clientService: ClientService,
            ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, ClientFormSchema, {
            kodeClient: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        });

            }
    

    // untuk fungsi get ALL relation
    
    submit(): void {
        const labelMap = extractLabels(ClientFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.client.idClient ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.clientService.clientControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data client berhasil disimpan.');
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
        this.clientService.clientControllerUpdate({ id: this.client.idClient, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data client berhasil diperbarui.');
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
