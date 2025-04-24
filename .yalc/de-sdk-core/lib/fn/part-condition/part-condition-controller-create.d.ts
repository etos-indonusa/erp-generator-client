import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsPartConditionDto } from '../../models/amims-part-condition-dto';
export interface PartConditionControllerCreate$Params {
    body: AmimsPartConditionDto;
}
export declare function partConditionControllerCreate(http: HttpClient, rootUrl: string, params: PartConditionControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsPartConditionDto;
}>>;
export declare namespace partConditionControllerCreate {
    var PATH: string;
}
