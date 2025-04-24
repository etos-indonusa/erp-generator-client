import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreTransferReportDto } from '../../models/amims-store-transfer-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface StoreTransferReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function storeTransferReportControllerFindAll(http: HttpClient, rootUrl: string, params: StoreTransferReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsStoreTransferReportDto>;
    'total'?: number;
}>>;
export declare namespace storeTransferReportControllerFindAll {
    var PATH: string;
}
