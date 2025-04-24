import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCompanyDto } from '../../models/amims-company-dto';
export interface CompanyControllerCreate$Params {
    body: AmimsCompanyDto;
}
export declare function companyControllerCreate(http: HttpClient, rootUrl: string, params: CompanyControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCompanyDto;
}>>;
export declare namespace companyControllerCreate {
    var PATH: string;
}
