import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrItemDto } from '../../models/amims-engineer-pmtr-item-dto';
export interface EngineerPmtrItemControllerFindOne$Params {
    id: string;
}
export declare function engineerPmtrItemControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPmtrItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrItemDto;
}>>;
export declare namespace engineerPmtrItemControllerFindOne {
    var PATH: string;
}
