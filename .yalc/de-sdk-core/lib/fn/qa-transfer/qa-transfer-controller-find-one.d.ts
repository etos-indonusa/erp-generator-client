import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsQaTransferDto } from '../../models/amims-qa-transfer-dto';
export interface QaTransferControllerFindOne$Params {
    id: string;
}
export declare function qaTransferControllerFindOne(http: HttpClient, rootUrl: string, params: QaTransferControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsQaTransferDto;
}>>;
export declare namespace qaTransferControllerFindOne {
    var PATH: string;
}
