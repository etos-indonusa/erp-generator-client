import { AmimsMpartDto } from '../models/amims-mpart-dto';
import { AmimsPartDto } from '../models/amims-part-dto';
export interface AmimsPurGrnItemReportDto {
    idMpart?: string;
    idPart?: string;
    idPurGrn?: string;
    idPurGrnItem: string;
    idPurPoItem?: string;
    mpart: AmimsMpartDto;
    noteGrnItem?: string;
    part: AmimsPartDto;
    qtyGrn?: number;
    serialNumber?: string;
    statusGrn?: string;
}
