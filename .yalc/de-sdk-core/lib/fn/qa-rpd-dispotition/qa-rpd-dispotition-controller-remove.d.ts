import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDispotitionDto } from '../../models/amims-qa-rpd-dispotition-dto';
export interface QaRpdDispotitionControllerRemove$Params {
    id: string;
}
export declare function qaRpdDispotitionControllerRemove(http: HttpClient, rootUrl: string, params: QaRpdDispotitionControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDispotitionDto;
}>>;
export declare namespace qaRpdDispotitionControllerRemove {
    var PATH: string;
}
