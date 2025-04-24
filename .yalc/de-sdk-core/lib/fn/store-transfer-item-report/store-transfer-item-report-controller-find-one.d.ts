import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferItemReportDto } from '../../models/amims-store-transfer-item-report-dto';
export interface StoreTransferItemReportControllerFindOne$Params {
    id: string;
}
export declare function storeTransferItemReportControllerFindOne(http: HttpClient, rootUrl: string, params: StoreTransferItemReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreTransferItemReportDto;
}>>;
export declare namespace storeTransferItemReportControllerFindOne {
    var PATH: string;
}
