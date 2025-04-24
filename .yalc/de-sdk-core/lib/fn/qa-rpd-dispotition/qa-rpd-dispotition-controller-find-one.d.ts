import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaRpdDispotitionDto } from '../../models/amims-qa-rpd-dispotition-dto';
export interface QaRpdDispotitionControllerFindOne$Params {
    id: string;
}
export declare function qaRpdDispotitionControllerFindOne(http: HttpClient, rootUrl: string, params: QaRpdDispotitionControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaRpdDispotitionDto;
}>>;
export declare namespace qaRpdDispotitionControllerFindOne {
    var PATH: string;
}
