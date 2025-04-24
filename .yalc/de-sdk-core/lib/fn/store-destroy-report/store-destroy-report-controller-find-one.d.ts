import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { AmimsStoreDestroyReportDto } from '../../models/amims-store-destroy-report-dto';
export interface StoreDestroyReportControllerFindOne$Params {
    id: string;
}
export declare function storeDestroyReportControllerFindOne(http: HttpClient, rootUrl: string, params: StoreDestroyReportControllerFindOne$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: AmimsStoreDestroyReportDto;
}>>;
export declare namespace storeDestroyReportControllerFindOne {
    var PATH: string;
}
