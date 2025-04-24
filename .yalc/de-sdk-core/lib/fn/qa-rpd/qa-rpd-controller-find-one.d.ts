import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDto } from '../../models/amims-qa-rpd-dto';
export interface QaRpdControllerFindOne$Params {
    id: string;
}
export declare function qaRpdControllerFindOne(http: HttpClient, rootUrl: string, params: QaRpdControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDto;
}>>;
export declare namespace qaRpdControllerFindOne {
    var PATH: string;
}
