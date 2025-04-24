import { HttpClient, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StrictHttpResponse } from '../../strict-http-response';
import { BaseWidgetQueryDto } from '../../models/base-widget-query-dto';
import { Object } from '../../models/object';
import { PelangganInvoiceWidgetDto } from '../../models/pelanggan-invoice-widget-dto';
import { SelectFieldDto } from '../../models/select-field-dto';
export interface InvoiceWidgetControllerFindAll$Params {
    /**
     * Filter object
     */
    filter?: Object;
    /**
     * JoinWhere object
     */
    joinWhere?: Object;
    /**
     * Select fields with aggregation, e.g. [{ type: "sum", field: "nilai", alias: "totalNilai" }]
     */
    select?: Array<SelectFieldDto>;
    /**
     * Fields to group by
     */
    groupBy?: Array<string>;
    sortKey?: string;
    sortValue?: 'ASC' | 'DESC';
    body: BaseWidgetQueryDto;
}
export declare function invoiceWidgetControllerFindAll(http: HttpClient, rootUrl: string, params: InvoiceWidgetControllerFindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<{
    'code'?: number;
    'pesan'?: string;
    'data'?: Array<PelangganInvoiceWidgetDto>;
    'total'?: number;
}>>;
export declare namespace invoiceWidgetControllerFindAll {
    var PATH: string;
}
