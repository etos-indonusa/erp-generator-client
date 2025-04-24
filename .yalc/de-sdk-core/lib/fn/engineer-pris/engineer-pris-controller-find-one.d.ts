import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisDto } from '../../models/amims-engineer-pris-dto';
export interface EngineerPrisControllerFindOne$Params {
    id: string;
}
export declare function engineerPrisControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPrisControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisDto;
}>>;
export declare namespace engineerPrisControllerFindOne {
    var PATH: string;
}
