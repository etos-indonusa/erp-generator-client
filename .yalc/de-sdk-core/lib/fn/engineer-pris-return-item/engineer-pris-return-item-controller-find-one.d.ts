import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsEngineerPrisReturnItemDto } from '../../models/amims-engineer-pris-return-item-dto';
export interface EngineerPrisReturnItemControllerFindOne$Params {
    id: string;
}
export declare function engineerPrisReturnItemControllerFindOne(http: HttpClient, rootUrl: string, params: EngineerPrisReturnItemControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsEngineerPrisReturnItemDto;
}>>;
export declare namespace engineerPrisReturnItemControllerFindOne {
    var PATH: string;
}
