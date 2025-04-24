import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsEngineerPrisItemReportDto {
    createdAt?: string;
    fromPart?: string;
    hashTechLog?: string;
    idEngineerPris?: string;
    idEngineerPrisItem: string;
    idPart?: string;
    idPartRemove?: string;
    isDeleted?: number;
    noteItemPris?: string;
    part: AmimsPartDto;
    partOnDate?: string;
    qtyInstall?: number;
    qtyPris?: number;
    statusItem?: string;
    tsnCycle?: number;
    tsnHours?: number;
    tsnVal?: number;
    tsoCycle?: number;
    tsoHours?: number;
    tsoVal?: number;
    updatedAt?: string;
}
