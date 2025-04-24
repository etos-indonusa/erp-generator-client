import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsLibReferenceDto } from '../../models/amims-lib-reference-dto';
export interface LibReferenceControllerRemove$Params {
    id: string;
}
export declare function libReferenceControllerRemove(http: HttpClient, rootUrl: string, params: LibReferenceControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsLibReferenceDto;
}>>;
export declare namespace libReferenceControllerRemove {
    var PATH: string;
}
