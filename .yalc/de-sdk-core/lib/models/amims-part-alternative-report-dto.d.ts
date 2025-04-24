import { AmimsMpartDto } from '../models/amims-mpart-dto';
export interface AmimsPartAlternativeReportDto {
    forMpart?: string;
    idMpart?: string;
    idPartAlternative: string;
    mpart: AmimsMpartDto;
}
