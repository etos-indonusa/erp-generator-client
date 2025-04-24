import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPmtrDto } from '../../models/amims-engineer-pmtr-dto';
export interface EngineerPmtrControllerFindOne$Params {
    id: string;
}
export declare function engineerPmtrControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPmtrControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPmtrDto;
}>>;
export declare namespace engineerPmtrControllerFindOne {
    var PATH: string;
}
