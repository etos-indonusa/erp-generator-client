import { AmimsSiteDto } from '../models/amims-site-dto';
export interface AmimsQaTransferReportDto {
    createdAt?: string;
    dateReceived?: string;
    dateTransfer?: string;
    idQaTransfer: string;
    idSite?: string;
    idUser?: string;
    idUserReceived?: string;
    noIndex?: number;
    noteTransfer?: string;
    numberTransfer?: string;
    site: AmimsSiteDto;
    statusTransfer?: string;
    toSite?: number;
    typeTransfer?: string;
    updatedAt?: string;
    validasi?: number;
}
