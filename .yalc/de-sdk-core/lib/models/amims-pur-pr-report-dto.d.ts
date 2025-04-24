import { AmimsAircraftDto } from '../models/amims-aircraft-dto';
import { AmimsPositionDto } from '../models/amims-position-dto';
import { AmimsSiteDto } from '../models/amims-site-dto';
export interface AmimsPurPrReportDto {
    aircraft: AmimsAircraftDto;
    createdAt?: string;
    dateAcc?: string;
    datePr?: string;
    description?: string;
    idAircraft?: string;
    idPosition?: string;
    idPurPr: string;
    idSite?: string;
    idUser?: string;
    idUserAcc?: string;
    isDeleted?: number;
    keyword?: string;
    noIndex?: number;
    notePr?: string;
    numberPr?: string;
    oldPr?: string;
    position: AmimsPositionDto;
    site: AmimsSiteDto;
    statusPr?: string;
    typePr?: string;
    updatedAt?: string;
    validasi?: number;
}
