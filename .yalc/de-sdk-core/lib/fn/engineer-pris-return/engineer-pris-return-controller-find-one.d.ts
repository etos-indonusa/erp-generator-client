import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnDto } from '../../models/amims-engineer-pris-return-dto';
export interface EngineerPrisReturnControllerFindOne$Params {
    id: string;
}
export declare function engineerPrisReturnControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPrisReturnControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnDto;
}>>;
export declare namespace engineerPrisReturnControllerFindOne {
    var PATH: string;
}
