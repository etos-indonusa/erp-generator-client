import { Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsMpcJoOperatorFormSchema } from 'de-sdk-core/form-schema/amims-mpc-jo-operator.form-schema';
import type { AmimsMpcJoOperatorDto } from 'de-sdk-core/models';
import { MpcJoOperatorService, UsersService } from 'de-sdk-core/services';

import { MpcJoService } from 'de-sdk-core/services';

@Component({
    selector: 'app-mpc-jo-operator-share-add',
    templateUrl: './mpc-jo-operator-share-add.component.html',
    styleUrl: './mpc-jo-operator-share-add.component.scss'
})
export class MpcJoOperatorShareAddComponent {
    @Input('mpcJoOperator') mpcJoOperator: AmimsMpcJoOperatorDto = {
        idMpcJoOperator: ''
    };
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.mpcJoOperator && this.mpcJoOperator.idMpcJoOperator) {
            this.form?.patchValue(this.mpcJoOperator);
        }
    }
    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private mpcJoOperatorService: MpcJoOperatorService,
        private mpcJoService: MpcJoService,
        private usersService: UsersService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsMpcJoOperatorFormSchema, {
            kodeMpcJoOperator: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        }, 'MpcJoOperator');

        this.getAllMpcJo();
        this.getAllOperator();
    }

    listMpcJo: any[] = [];

    listOperator: any[] = [];


    // untuk fungsi get ALL relation
    getAllMpcJo() {
        this.mpcJoService.mpcJoControllerFindAll().subscribe(
            data => this.listMpcJo = data.data ?? []
        );
    }
    getAllOperator() {
        this.usersService.usersControllerFindAll().subscribe(
            data => this.listOperator = data.data ?? []
        );
    }

    submit(): void {
        const labelMap = extractLabels(AmimsMpcJoOperatorFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.mpcJoOperator.idMpcJoOperator ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.mpcJoOperatorService.mpcJoOperatorControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcJoOperator berhasil disimpan.');
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
        this.mpcJoOperatorService.mpcJoOperatorControllerUpdate({ id: this.mpcJoOperator.idMpcJoOperator, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data mpcJoOperator berhasil diperbarui.');
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
