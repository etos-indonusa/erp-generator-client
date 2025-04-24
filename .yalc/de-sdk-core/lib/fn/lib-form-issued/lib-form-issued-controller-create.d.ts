import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibFormIssuedDto } from '../../models/amims-lib-form-issued-dto';
export interface LibFormIssuedControllerCreate$Params {
    body: AmimsLibFormIssuedDto;
}
export declare function libFormIssuedControllerCreate(http: HttpClient, rootUrl: string, params: LibFormIssuedControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibFormIssuedDto;
}>>;
export declare namespace libFormIssuedControllerCreate {
    var PATH: string;
}
