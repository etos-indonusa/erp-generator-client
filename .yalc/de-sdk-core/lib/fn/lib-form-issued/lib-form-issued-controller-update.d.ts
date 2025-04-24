import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibFormIssuedDto } from '../../models/amims-lib-form-issued-dto';
export interface LibFormIssuedControllerUpdate$Params {
    id: string;
    body: AmimsLibFormIssuedDto;
}
export declare function libFormIssuedControllerUpdate(http: HttpClient, rootUrl: string, params: LibFormIssuedControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibFormIssuedDto;
}>>;
export declare namespace libFormIssuedControllerUpdate {
    var PATH: string;
}
