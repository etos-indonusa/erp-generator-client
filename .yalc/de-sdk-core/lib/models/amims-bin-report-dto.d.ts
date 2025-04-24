import { AmimsSiteDto } from '../models/amims-site-dto';
export interface AmimsBinReportDto {
    bin?: string;
    code?: string;
    createdAt?: string;
    description?: string;
    idBin: string;
    idSite?: string;
    site: AmimsSiteDto;
    updatedAt?: string;
}
