import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsPurVendorItemReportDto {
    createdAt?: string;
    idMpart?: string;
    idPurVendor?: string;
    idPurVendorItem: string;
    isDeleted?: number;
    manufacture?: string;
    minOrder?: number;
    mpart: AmimsMpartDto;
    note?: string;
    price?: number;
    responseTime?: number;
    updatedAt?: string;
}
