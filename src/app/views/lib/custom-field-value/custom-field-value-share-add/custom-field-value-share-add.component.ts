import { Component, Input, OnInit } from '@angular/core';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { CustomFieldService, CustomFieldValueService } from 'de-sdk-core/services';
import type { ToolsCustomFieldDto, ToolsCustomFieldGroupDto, ToolsCustomFieldValueDto } from 'de-sdk-core/models';
import { forkJoin } from 'rxjs';
import { PesanService } from 'src/app/shared/services/pesan.service';

@Component({
    selector: 'app-custom-field-value-share-add',
    templateUrl: './custom-field-value-share-add.component.html',
    styleUrl: './custom-field-value-share-add.component.scss',
})
export class CustomFieldValueShareAddComponent implements OnInit {
    @Input() idCustomFieldGroup: string = '';
    @Input() modulId: string = '';
    @Input() group: ToolsCustomFieldGroupDto;

    fields: (ToolsCustomFieldDto & { nilai?: string })[] = [];

    constructor(
        private pesan: PesanService,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef<string>,
        private customFieldService: CustomFieldService,
        private customFieldValueService: CustomFieldValueService,
    ) { }

    ngOnInit(): void {
        if (this.idCustomFieldGroup) {
            this.loadFields();
        }
    }

    loadFields() {
        this.customFieldService.customFieldControllerFindAll({
            filter: JSON.stringify({ idCustomFieldGroup: this.idCustomFieldGroup }),
        }).subscribe((res) => {
            const fields = res.data ?? [];

            // tambahkan nilai dari modul saat ini
            this.customFieldValueService.customFieldValueControllerFindAll({

                filter: JSON.stringify({
                    modul: this.group.modul,
                    modulId: this.modulId,
                }),

            }).subscribe((valRes) => {
                const values = valRes.data ?? [];
                this.fields = fields.map((f) => ({
                    ...f,
                    nilai: values.find((v: any) => v.idCustomField === f.idCustomField)?.nilai ?? '',
                }));
            });
        });
    }

    autoSave(field: ToolsCustomFieldDto, value: string) {
        const payload: ToolsCustomFieldValueDto = {
            idCustomField: field.idCustomField,
            modul: this.group.modul,
            modulId: this.modulId,
            nilai: value,
            idCustomFieldValue: '',
            idCustomFieldGroup: field.idCustomFieldGroup,
            labelField: field.labelField,
            kodeField: field.kodeField,
            tableName: this.group.tableName
        };

        this.customFieldValueService.customFieldValueControllerCreate({ body: payload }).subscribe({
            next: () => {
                this.notify.success('Tersimpan', `${field.labelField} berhasil diperbarui.`);
            },
            error: () => {
                this.notify.error('Gagal', `${field.labelField} gagal disimpan.`);
            }
        });
    }

    submit() {

        const observables = this.fields.map(field => 
            this.customFieldValueService.customFieldValueControllerCreate({
                body:
                {
                    idCustomField: field.idCustomField,
                    modul: this.group.modul,
                    modulId: this.modulId,
                    nilai: field.nilai,
                    idCustomFieldValue: '',
                    idCustomFieldGroup: field.idCustomFieldGroup,
                    labelField: field.labelField,
                    kodeField: field.kodeField,
                    tableName: this.group.tableName
                }
            })
        );

        forkJoin(observables).subscribe({
            next: (results) => {
                this.pesan.pesanBerhasilForm('Semua informasi berhasil disimpan.');
                this.nzDrawerRef.close();
            },
            error: (err) => {
                this.pesan.pesanWarningForm('Gagal menyimpan beberapa field: ' + err.message);
                
            },
            
        });


    }

    parseSelect(raw: any): any[] {
        if (!raw) return [];
        if (typeof raw === 'string') {
            try {
                return JSON.parse(raw);
            } catch {
                return [];
            }
        }
        return raw;
    }

    goToBack() {
        this.nzDrawerRef.close();
    }
}
