import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsStoreTransferItemReportDto {
    createdAt?: string;
    idEngineerPmtrItem?: string;
    idPart?: string;
    idStoreTransfer?: string;
    idStoreTransferItem: string;
    newBin?: string;
    noteItemTransfer?: string;
    oldIdPart?: string;
    part: AmimsPartDto;
    qtyTransfer?: number;
    statusItem?: string;
    updatedAt?: string;
}
