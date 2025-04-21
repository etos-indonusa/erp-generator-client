import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMpcGseFormSchema } from 'src/sdk/core/form-schema/amims-mpc-gse.form-schema';
import type { AmimsMpcGseDto } from 'src/sdk/core/models';
import { MpcGseService, UsersService } from 'src/sdk/core/services';

import { EngineerRtiService } from 'src/sdk/core/services'; 

@Component({
    selector: 'app-mpc-gse-share-add',
    templateUrl: './mpc-gse-share-add.component.html',
    styleUrl: './mpc-gse-share-add.component.scss'
})
export class MpcGseShareAddComponent {
    @Input('mpcGse') mpcGse: AmimsMpcGseDto = {
        idMpcGse: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.mpcGse && this.mpcGse.idMpcGse) {
            this.form?.patchValue(this.mpcGse);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private mpcGseService: MpcGseService,
        private engineerRtiService: EngineerRtiService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMpcGseFormSchema, {
            kodeMpcGse: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'MpcGse');

        this.getAllEngineerRti();
        this.getAllUserGse();
    }

    listEngineerRti: any[] = [];

    listUserGse: any[] = [];


    // untuk fungsi get ALL relation
    getAllEngineerRti() {
        this.engineerRtiService.engineerRtiControllerFindAll().subscribe(
            data => this.listEngineerRti = data.data ?? []
        );
    }
    getAllUserGse() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listUserGse = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMpcGseFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.mpcGse.idMpcGse ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.mpcGseService.mpcGseControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcGse berhasil disimpan.');
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
        this.mpcGseService.mpcGseControllerUpdate({ id: this.mpcGse.idMpcGse, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcGse berhasil diperbarui.');
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
