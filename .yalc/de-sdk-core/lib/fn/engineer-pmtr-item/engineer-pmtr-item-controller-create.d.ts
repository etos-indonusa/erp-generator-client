import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrItemDto } from '../../models/amims-engineer-pmtr-item-dto';
export interface EngineerPmtrItemControllerCreate$Params {
    body: AmimsEngineerPmtrItemDto;
}
export declare function engineerPmtrItemControllerCreate(http: HttpClient, rootUrl: string, params: EngineerPmtrItemControllerCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrItemDto;
}>>;
export declare namespace engineerPmtrItemControllerCreate {
    var PATH: string;
}
