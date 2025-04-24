import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibReferenceDto } from '../../models/amims-lib-reference-dto';
export interface LibReferenceControllerFindOne$Params {
    id: string;
}
export declare function libReferenceControllerFindOne(http: HttpClient, rootUrl: string, params: LibReferenceControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibReferenceDto;
}>>;
export declare namespace libReferenceControllerFindOne {
    var PATH: string;
}
