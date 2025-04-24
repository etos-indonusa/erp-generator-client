import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsPurPrItemReportDto {
    createdAt?: string;
    idMpart?: string;
    idMpcPiroItem?: string;
    idPurPr?: string;
    idPurPrItem: string;
    isDeleted?: number;
    mpart: AmimsMpartDto;
    notePrItem?: string;
    oldPrItem?: string;
    priority?: string;
    qtyPr?: number;
    qtyStock?: number;
    statusItem?: string;
    updatedAt?: string;
}
