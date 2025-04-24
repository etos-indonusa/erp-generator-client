import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDto } from '../../models/amims-qa-rpd-dto';
export interface QaRpdControllerRemove$Params {
    id: string;
}
export declare function qaRpdControllerRemove(http: HttpClient, rootUrl: string, params: QaRpdControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDto;
}>>;
export declare namespace qaRpdControllerRemove {
    var PATH: string;
}
