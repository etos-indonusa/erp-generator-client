import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrItemDto } from '../../models/amims-engineer-pmtr-item-dto';
export interface EngineerPmtrItemControllerUpdate$Params {
    id: string;
    body: AmimsEngineerPmtrItemDto;
}
export declare function engineerPmtrItemControllerUpdate(http: HttpClient, rootUrl: string, params: EngineerPmtrItemControllerUpdate$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrItemDto;
}>>;
export declare namespace engineerPmtrItemControllerUpdate {
    var PATH: string;
}
