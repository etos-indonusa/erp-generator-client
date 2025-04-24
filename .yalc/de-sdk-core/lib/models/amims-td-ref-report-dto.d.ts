import { AmimsTdDto } from '../models/amims-td-dto';
export interface AmimsTdRefReportDto {
    idTd?: string;
    idTdLain?: string;
    idTdRef: string;
    noTdLain?: string;
    td: AmimsTdDto;
}
