export interface PelangganInvoiceDto {
    alamatPenagihan?: string;
    catatan?: string;
    createdAt?: string;
    createdBy?: string;
    dpp?: number;
    idContract?: string;
    idInvoice: string;
    jenisInvoice?: string;
    metodePembayaran?: string;
    nilaiInvoice?: number;
    nomorInvoice?: string;
    npwp?: string;
    periode?: string;
    picPenagihan?: string;
    ppn?: number;
    statusInvoice?: string;
    tanggalDibayar?: string;
    tanggalJatuhTempo?: string;
    tanggalTerbit?: string;
    updatedAt?: string;
    updatedBy?: string;
}
