import { PelangganContractDto } from '../models/pelanggan-contract-dto';
export interface PelangganContractSiteReportDto {
    biayaAkhir?: number;
    biayaBulanan?: number;
    biayaDiawal?: number;
    catatan?: string;
    contract: PelangganContractDto;
    createdAt?: string;
    idClientSite: string;
    idContract: string;
    idContractSite: string;
    jumlahJadwalPerBulan?: number;
    nilaiTotal?: number;
    statusContractSite?: string;
    updatedAt?: string;
}
