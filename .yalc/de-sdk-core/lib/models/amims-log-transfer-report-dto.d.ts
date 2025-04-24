import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsLogTransferReportDto {
    dateTransfer?: string;
    fromIdPart?: string;
    fromSite?: string;
    idLogTransfer: string;
    idMpart?: string;
    idUser?: string;
    issingle?: string;
    mpart: AmimsMpartDto;
    qty?: number;
    toIdPart?: string;
    toSite?: number;
}
