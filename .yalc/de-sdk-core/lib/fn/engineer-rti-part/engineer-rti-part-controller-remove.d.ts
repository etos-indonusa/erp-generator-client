import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerRtiPartDto } from '../../models/amims-engineer-rti-part-dto';
export interface EngineerRtiPartControllerRemove$Params {
    id: string;
}
export declare function engineerRtiPartControllerRemove(http: HttpClient, rootUrl: string, params: EngineerRtiPartControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerRtiPartDto;
}>>;
export declare namespace engineerRtiPartControllerRemove {
    var PATH: string;
}
