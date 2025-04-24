import { AmimsDoctypeDto } from '../models/amims-doctype-dto';
export interface AmimsTdReportDto {
    applicable?: string;
    createdAt?: string;
    docNumber?: string;
    doctype: AmimsDoctypeDto;
    effectiveDate?: string;
    fileTd?: string;
    idDoctype?: string;
    idTd: string;
    idUser?: string;
    noteDoc?: string;
    oldId?: string;
    rev?: string;
    tdParent?: string;
    title?: string;
    updatedAt?: string;
    validasi?: number;
}
