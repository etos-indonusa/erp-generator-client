import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibFormIssuedDto } from '../../models/amims-lib-form-issued-dto';
export interface LibFormIssuedControllerFindOne$Params {
    id: string;
}
export declare function libFormIssuedControllerFindOne(http: HttpClient, rootUrl: string, params: LibFormIssuedControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibFormIssuedDto;
}>>;
export declare namespace libFormIssuedControllerFindOne {
    var PATH: string;
}
