import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCompanyDto } from '../../models/amims-company-dto';
export interface CompanyControllerFindOne$Params {
    id: string;
}
export declare function companyControllerFindOne(http: HttpClient, rootUrl: string, params: CompanyControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCompanyDto;
}>>;
export declare namespace companyControllerFindOne {
    var PATH: string;
}
