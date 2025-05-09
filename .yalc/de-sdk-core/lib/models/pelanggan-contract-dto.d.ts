export interface PelangganContractDto {
    catatanKontrak?: string;
    createdAt?: string;
    dokumenUrl?: string;
    durasiBulan?: number;
    feeSales?: number;
    idClient: string;
    idContract: string;
    idContractJenis?: string;
    idDocument?: string;
    idKantor?: string;
    isAutoInvoice?: boolean;
    namaSales?: string;
    nilaiAkhir?: number;
    nilaiBulanan?: number;
    nilaiDiawal?: number;
    nilaiKontrak?: number;
    nomorKontrak?: string;
    presentaseFee?: number;
    refKontrakSebelumnya?: string;
    statusContract?: string;
    tanggalAkhir?: string;
    tanggalKontrak?: string;
    tanggalMulai?: string;
    updatedAt?: string;
}
