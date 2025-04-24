import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartConditionDto } from '../../models/amims-part-condition-dto';
export interface PartConditionControllerFindOne$Params {
    id: string;
}
export declare function partConditionControllerFindOne(http: HttpClient, rootUrl: string, params: PartConditionControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartConditionDto;
}>>;
export declare namespace partConditionControllerFindOne {
    var PATH: string;
}
