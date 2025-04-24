import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferItemReportDto } from '../../models/amims-store-transfer-item-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface StoreTransferItemReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function storeTransferItemReportControllerFindAll(http: HttpClient, rootUrl: string, params: StoreTransferItemReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsStoreTransferItemReportDto>;
    'total'?: number;
}>>;
export declare namespace storeTransferItemReportControllerFindAll {
    var PATH: string;
}
