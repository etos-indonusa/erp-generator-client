import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier';
import { AmimsVDueListOutputFormSchema } from 'de-sdk-core'; 
import type  { AmimsVDueListOutputDto } from 'de-sdk-core';
import { VDueListOutputService } from 'de-sdk-core';

import { DueListOutputService } from 'de-sdk-core';
import { MpartService } from 'de-sdk-core';
import { PartService } from 'de-sdk-core';

@Component({
    selector: 'app-v-due-list-output-share-add',
    templateUrl: './v-due-list-output-share-add.component.html',
    styleUrl: './v-due-list-output-share-add.component.scss'
})
export class VDueListOutputShareAddComponent {
    @Input('vDueListOutput') vDueListOutput: AmimsVDueListOutputDto = {
  idDueListOutput: ''
};
    form!: FormGroup;

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.vDueListOutput && this.vDueListOutput.idDueListOutput) {
        this.form?.patchValue(this.vDueListOutput);
        }
    }
    constructor(
        private cd: ChangeDetectorRef,
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private vDueListOutputService: VDueListOutputService,
                        private dueListOutputService: DueListOutputService,
                private mpartService: MpartService,
                private partService: PartService,
                    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, AmimsVDueListOutputFormSchema, {
            kodeVDueListOutput: [Validators.minLength(3), Validators.maxLength(3)],
            catatan: [Validators.maxLength(200)],
        },'VDueListOutput');

                            this.getAllDueListOutput();
                    this.getAllMpart();
                    this.getAllPart();
                    }
    
    listDueListOutput: any[] = [];
    
    listMpart: any[] = [];
    
    listPart: any[] = [];
    

    // untuk fungsi get ALL relation
            getAllDueListOutput() {
    this.dueListOutputService.dueListOutputControllerFindAll().subscribe(
      data => this.listDueListOutput = data.data ?? []
    );
  }
        getAllMpart() {
    this.mpartService.mpartControllerFindAll().subscribe(
      data => this.listMpart = data.data ?? []
    );
  }
        getAllPart() {
    this.partService.partControllerFindAll().subscribe(
      data => this.listPart = data.data ?? []
    );
  }
        
    submit(): void {
        const labelMap = extractLabels(AmimsVDueListOutputFormSchema);

        if (showFormValidationWarnings(this.form, this.notify, labelMap)) {
            return;
        }
        this.vDueListOutput.idDueListOutput ? this.update() : this.simpan();

        // lanjut simpan
    }
    is_loading = false
    simpan() {
        this.is_loading = true;
        this.vDueListOutputService.vDueListOutputControllerCreate({ body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data vDueListOutput berhasil disimpan.');
                this.nzDrawerRef.close(data);
            },
            error: (e) => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.' + e?.error?.error);
            },
            complete: () => (this.is_loading = false)
        });
    }

    update() {
        this.is_loading = true;
        this.vDueListOutputService.vDueListOutputControllerUpdate({ id: this.vDueListOutput.idDueListOutput, body: this.form.value }).subscribe({
            next: (data) => {
                this.notify.success('Berhasil', 'Data vDueListOutput berhasil diperbarui.');
                this.nzDrawerRef.close(data);
                this.cd.detectChanges()
            },
            error: (e) => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat menyimpan.' + e?.error?.error);
            },
            complete: () => (this.is_loading = false)
        });
    }

    goToBack(data = null) {
        this.nzDrawerRef.close(data);
    }
}
