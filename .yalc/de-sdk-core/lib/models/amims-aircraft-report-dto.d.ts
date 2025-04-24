import { AmimsActypeDto } from '../models/amims-actype-dto';
export interface AmimsAircraftReportDto {
    acFoto?: string;
    actype: AmimsActypeDto;
    createdAt?: string;
    descriptionAircraft?: string;
    hasapu?: string;
    idActype?: string;
    idAircraft: string;
    isDeleted?: number;
    keywordAircraft?: string;
    manufactureAircraft?: string;
    manufactureDate?: string;
    manufactureEngine?: string;
    manufacturedBy?: string;
    oldActype?: string;
    oldId?: string;
    purchasedate?: string;
    reasonRegschange?: string;
    registrationNumber?: string;
    serialNumber?: string;
    statusAc?: string;
    tendurance?: number;
    updatedAt?: string;
    yearMade?: string;
}
