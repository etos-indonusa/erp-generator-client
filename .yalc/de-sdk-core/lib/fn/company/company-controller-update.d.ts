import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCompanyDto } from '../../models/amims-company-dto';
export interface CompanyControllerUpdate$Params {
    id: string;
    body: AmimsCompanyDto;
}
export declare function companyControllerUpdate(http: HttpClient, rootUrl: string, params: CompanyControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCompanyDto;
}>>;
export declare namespace companyControllerUpdate {
    var PATH: string;
}
