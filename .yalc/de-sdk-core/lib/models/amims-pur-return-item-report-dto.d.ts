import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsPurReturnItemReportDto {
    idMpart?: string;
    idPurGrnItem?: string;
    idPurPoItem?: string;
    idPurReturn?: string;
    idPurReturnItem: string;
    mpart: AmimsMpartDto;
    noteReturnItem?: string;
    qtyReturn?: number;
    statusItem?: number;
}
