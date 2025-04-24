import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferReportDto } from '../../models/amims-store-transfer-report-dto';
export interface StoreTransferReportControllerFindOne$Params {
    id: string;
}
export declare function storeTransferReportControllerFindOne(http: HttpClient, rootUrl: string, params: StoreTransferReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferReportDto;
}>>;
export declare namespace storeTransferReportControllerFindOne {
    var PATH: string;
}
