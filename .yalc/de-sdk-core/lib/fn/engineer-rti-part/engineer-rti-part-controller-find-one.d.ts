import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiPartDto } from '../../models/amims-engineer-rti-part-dto';
export interface EngineerRtiPartControllerFindOne$Params {
    id: string;
}
export declare function engineerRtiPartControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerRtiPartControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiPartDto;
}>>;
export declare namespace engineerRtiPartControllerFindOne {
    var PATH: string;
}
