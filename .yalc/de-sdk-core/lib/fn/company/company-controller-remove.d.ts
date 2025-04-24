import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsCompanyDto } from '../../models/amims-company-dto';
export interface CompanyControllerRemove$Params {
    id: string;
}
export declare function companyControllerRemove(http: HttpClient, rootUrl: string, params: CompanyControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsCompanyDto;
}>>;
export declare namespace companyControllerRemove {
    var PATH: string;
}
