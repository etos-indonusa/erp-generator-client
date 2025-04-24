import { AmimsSiteDto } from '../models/amims-site-dto';
export interface AmimsInternalGrnReportDto {
    createdAt?: string;
    dateAcc?: string;
    dateGrn?: string;
    idInternalGrn: string;
    idSite?: string;
    idUser?: string;
    idUserAcc?: string;
    numberGrn?: string;
    remark?: string;
    site: AmimsSiteDto;
    statusGrn?: string;
    updatedAt?: string;
    validasi?: number;
}
