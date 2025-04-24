import { AmimsPartDto } from '../models/amims-part-dto';
import { AmimsSiteDto } from '../models/amims-site-dto';
export interface AmimsStoreDestroyReportDto {
    createdAt?: string;
    dateDestroy?: string;
    idPart?: string;
    idSite?: string;
    idStoreDestroy: string;
    idUser?: string;
    noteDestroy?: string;
    numberDestroy?: string;
    part: AmimsPartDto;
    refRti?: string;
    site: AmimsSiteDto;
    updatedAt?: string;
}
