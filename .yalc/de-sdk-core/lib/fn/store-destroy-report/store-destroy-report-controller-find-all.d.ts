import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreDestroyReportDto } from '../../models/amims-store-destroy-report-dto';
import { BaseQueryDtoSmart } from '../../models/base-query-dto-smart';
export interface StoreDestroyReportControllerFindAll$Params {
    body: BaseQueryDtoSmart;
}
export declare function storeDestroyReportControllerFindAll(http: HttpClient, rootUrl: string, params: StoreDestroyReportControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<AmimsStoreDestroyReportDto>;
    'total'?: number;
}>>;
export declare namespace storeDestroyReportControllerFindAll {
    var PATH: string;
}
