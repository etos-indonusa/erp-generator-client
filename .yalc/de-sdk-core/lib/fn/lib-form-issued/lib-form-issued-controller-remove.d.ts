import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibFormIssuedDto } from '../../models/amims-lib-form-issued-dto';
export interface LibFormIssuedControllerRemove$Params {
    id: string;
}
export declare function libFormIssuedControllerRemove(http: HttpClient, rootUrl: string, params: LibFormIssuedControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibFormIssuedDto;
}>>;
export declare namespace libFormIssuedControllerRemove {
    var PATH: string;
}
