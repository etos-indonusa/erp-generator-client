import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { generateFormFromSchema } from 'src/app/helpers/form-generator';
import { extractLabels, showFormValidationWarnings } from 'src/app/helpers/form-validation-notifier'; 
// import { DocumentControllerUploadFile$Params } from 'de-sdk-core/lib/fn/document/document-controller-upload-file';
// import { DocumentDocumentFormSchema } from 'de-sdk-core/lib/form-schema/document-document.form-schema'; 
import { DocumentService } from 'de-sdk-core/lib/services/document.service';
import { DocumentDocumentFormSchema } from 'de-sdk-core/lib/form-schema/document-document.form-schema';
import { DocumentControllerUploadFile$Params } from 'de-sdk-core/lib/fn/document/document-controller-upload-file';

@Component({
    selector: 'document-upload-drawer',
    templateUrl: './upload-drawer.component.html',
    styleUrls: ['./upload-drawer.component.scss']
})
export class UploadDrawerComponent {
    @Input('for-module') forModule!: string;
    @Input('for-module-id') forModuleId!: string;
    @Input('enable-crud') enableCrud: boolean = false;
    @Output('reload') reload = new EventEmitter()
    @Output('total-data') totalData = new EventEmitter()

    form!: FormGroup;
    @Input() document: any = {};
    is_loading = false;

    constructor(
        private fb: FormBuilder,
        private notify: NzNotificationService,
        private nzDrawerRef: NzDrawerRef,
        private documentService: DocumentService,
    ) { }

    ngOnInit(): void {
        this.form = generateFormFromSchema(this.fb, {
            ...DocumentDocumentFormSchema,
            enableDownload: {
                ...DocumentDocumentFormSchema.enableDownload,
                default: 'Ya'
            },
            tanggal: {
                ...DocumentDocumentFormSchema.tanggal,
                default: new Date().toISOString().slice(0, 10) // YYYY-MM-DD
            }
        },{}, 'Document');
        if (this.document?.idDocument) {
            this.form.patchValue(this.document);
        }
    }

    fileList: any[] = [];
    acceptedTypes = '.jpg,.jpeg,.png,.gif,.bmp,.pdf,.doc,.docx,.xls,.xlsx';

    beforeUpload = (file: NzUploadFile, fileList: NzUploadFile[]): boolean => {
        const allowedTypes = [
            'image/jpeg', 'image/png', 'image/gif', 'image/bmp',
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];

        // Coba ambil file asli
        const rawFile: File | undefined =
            (file as any)?.originFileObj ?? (file as any);

        if (!rawFile || !rawFile.type) {
            this.notify.warning('File tidak valid', 'File tidak dapat dibaca.');
            return false;
        }

        if (!allowedTypes.includes(rawFile.type)) {
            this.notify.warning('Format file tidak didukung', rawFile.name);
            return false;
        }

        this.fileList = [file]; // tetap pakai NzUploadFile
        return false; // mencegah upload otomatis
    };


    handleChange(info: any): void {
        const file = info.file;
        if (file.status === 'removed') {
            this.fileList = [];
        }
    }

    submit(): void {
        const labelMap = extractLabels(DocumentDocumentFormSchema);
        if (showFormValidationWarnings(this.form, this.notify, labelMap)) return;

        if (this.fileList.length === 0) {
            this.notify.warning('File belum dipilih', 'Silakan upload file terlebih dahulu.');
            return;
        }

        const fileItem = this.fileList[0];
        const rawFile = (fileItem.originFileObj as File) ?? (fileItem as any as File);

        if (!rawFile || !rawFile.name || !rawFile.type) {
            this.notify.warning('File belum valid', 'File tidak lengkap atau gagal diproses.');
            return;
        }

        const baseName = rawFile.name.replace(/\.[^/.]+$/, '');
        const ext = rawFile.name.split('.').pop() ?? '';
        const nameToSet = this.form.get('name')?.value?.trim() || baseName;

        const bodyToSend: DocumentControllerUploadFile$Params = {
            body: {
                file: rawFile,
                fileName: rawFile.name,
                fileExt: ext,
                name: nameToSet,
                fileLocation: '', // optional
                idDocument: this.form.get('idDocument')?.value || undefined,
                nomor: this.form.get('nomor')?.value || undefined,
                tanggal: this.form.get('tanggal')?.value || undefined,
                forModule: this.forModule || undefined,
                forModuleId: this.forModuleId || undefined,
                enableDownload: this.form.get('enableDownload')?.value || undefined,
                idUser: this.form.get('idUser')?.value || undefined,
            }
        };

        this.is_loading = true;

        this.documentService.documentControllerUploadFile(bodyToSend).subscribe({
            next: () => {
                this.notify.success('Berhasil', 'Dokumen berhasil diunggah & disimpan');
                this.nzDrawerRef.close(true);
            },
            error: () => {
                this.notify.error('Gagal', 'Terjadi kesalahan saat upload dokumen');
            },
            complete: () => (this.is_loading = false),
        });
    }

    // submit(): void {
    //     const labelMap = extractLabels(DocumentFormSchema);
    //     if (showFormValidationWarnings(this.form, this.notify, labelMap)) return;

    //     if (this.fileList.length === 0) {
    //         this.notify.warning('File belum dipilih', 'Silakan upload file terlebih dahulu.');
    //         return;
    //     }

         

    //     const formData: any = new FormData();

    //     const file = this.fileList[0]; 
    //     if (!file) {
    //         this.notify.warning('File belum valid', 'File tidak lengkap atau gagal diproses.');
    //         return;
    //     }

    //     // ⛑ fallback ke file langsung jika originFileObj kosong
    //     const rawFile = (file.originFileObj as File) ?? (file as any as File);

         
    //     if (!rawFile || !rawFile.name || !rawFile.type) {
    //         this.notify.warning('File belum valid', 'File tidak lengkap atau gagal diproses.');
    //         return;
    //     }

    //     const baseName = rawFile.name.replace(/\.[^/.]+$/, '');
    //     const ext = rawFile.name.split('.').pop() ?? '';
    //     const nameToSet = this.form.get('name')?.value?.trim() || baseName;

         
        

    //     formData.append('fileName', rawFile.name);
    //     formData.append('fileExt', ext);
    //     formData.append('name', nameToSet);
    //     formData.append('fileLocation', ''); // biarkan backend isi path kalau perlu

    //     // Tambahkan sisa field dari form
    //     Object.entries(this.form.value).forEach(([key, value]) => {
    //         if (!['fileName', 'fileExt', 'name', 'fileLocation'].includes(key)) {
    //             formData.append(key, value != null ? String(value) : '');
    //         }
    //     });

    //     this.is_loading = true;
    //     // Logging isi FormData manual
    //     for (const pair of formData.entries()) {
    //         console.log(pair[0] + ':', pair[1]);
    //     }

    //     this.documentService.documentControllerUploadFile(formData).subscribe({
    //         next: (res) => {
    //             this.notify.success('Berhasil', 'Dokumen berhasil diunggah & disimpan');
    //             this.nzDrawerRef.close(res);
    //         },
    //         error: () => {
    //             this.notify.error('Gagal', 'Terjadi kesalahan saat upload dokumen');
    //         },
    //         complete: () => {
    //             this.is_loading = false;
    //         },
    //     });
    // }


    goToBack(data = null): void {
        this.nzDrawerRef.close(data);
    }
}
