import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisDto } from '../../models/amims-engineer-pris-dto';
export interface EngineerPrisControllerRemove$Params {
    id: string;
}
export declare function engineerPrisControllerRemove(http: HttpClient, rootUrl: string, params: EngineerPrisControllerRemove$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisDto;
}>>;
export declare namespace engineerPrisControllerRemove {
    var PATH: string;
}
