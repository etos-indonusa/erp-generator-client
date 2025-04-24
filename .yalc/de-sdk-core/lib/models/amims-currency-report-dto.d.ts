import { AmimsMcurrencyDto } from '../models/amims-mcurrency-dto';
export interface AmimsCurrencyReportDto {
    createdAt?: string;
    effectiveDate?: string;
    forcurrency?: string;
    idCurrency: string;
    idMcurrency?: string;
    idUser?: string;
    mcurrency: AmimsMcurrencyDto;
    newValue?: number;
    noteCurrency?: string;
    oldValue?: number;
    updatedAt?: string;
}
