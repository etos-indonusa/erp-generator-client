/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { customFieldValueWidgetControllerFindAll } from '../fn/custom-field-value-widget/custom-field-value-widget-controller-find-all';
import * as i0 from "@angular/core";
import * as i1 from "../api-configuration";
import * as i2 from "@angular/common/http";
export class CustomFieldValueWidgetService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /** Path part for operation `customFieldValueWidgetControllerFindAll()` */
    static { this.CustomFieldValueWidgetControllerFindAllPath = '/auth/custom_field_value/custom_field_value_widget'; }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `customFieldValueWidgetControllerFindAll()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueWidgetControllerFindAll$Response(params, context) {
        return customFieldValueWidgetControllerFindAll(this.http, this.rootUrl, params, context);
    }
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `customFieldValueWidgetControllerFindAll$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    customFieldValueWidgetControllerFindAll(params, context) {
        return this.customFieldValueWidgetControllerFindAll$Response(params, context).pipe(map((r) => r.body));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CustomFieldValueWidgetService, deps: [{ token: i1.ApiConfiguration }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CustomFieldValueWidgetService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: CustomFieldValueWidgetService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.ApiConfiguration }, { type: i2.HttpClient }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWZpZWxkLXZhbHVlLXdpZGdldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2RrY29yZS9zcmMvbGliL3NlcnZpY2VzL2N1c3RvbS1maWVsZC12YWx1ZS13aWRnZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG1EQUFtRDtBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hELE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLCtFQUErRSxDQUFDOzs7O0FBS3hJLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxXQUFXO0lBQzVELFlBQVksTUFBd0IsRUFBRSxJQUFnQjtRQUNwRCxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwRUFBMEU7YUFDMUQsZ0RBQTJDLEdBQUcsb0RBQW9ELEFBQXZELENBQXdEO0lBRW5IOzs7OztPQUtHO0lBQ0gsZ0RBQWdELENBQUMsTUFBc0QsRUFBRSxPQUFxQjtRQU01SCxPQUFPLHVDQUF1QyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsdUNBQXVDLENBQUMsTUFBc0QsRUFBRSxPQUFxQjtRQU1uSCxPQUFPLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNoRixHQUFHLENBQUMsQ0FBQyxDQUtULEVBS0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FDUCxDQUFDO0lBQ0osQ0FBQzsrR0FoRFUsNkJBQTZCO21IQUE3Qiw2QkFBNkIsY0FEaEIsTUFBTTs7NEZBQ25CLDZCQUE2QjtrQkFEekMsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLyogZXNsaW50LWRpc2FibGUgKi9cbi8qIENvZGUgZ2VuZXJhdGVkIGJ5IG5nLW9wZW5hcGktZ2VuIERPIE5PVCBFRElULiAqL1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuLi9iYXNlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQXBpQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uL2FwaS1jb25maWd1cmF0aW9uJztcbmltcG9ydCB7IFN0cmljdEh0dHBSZXNwb25zZSB9IGZyb20gJy4uL3N0cmljdC1odHRwLXJlc3BvbnNlJztcblxuaW1wb3J0IHsgY3VzdG9tRmllbGRWYWx1ZVdpZGdldENvbnRyb2xsZXJGaW5kQWxsIH0gZnJvbSAnLi4vZm4vY3VzdG9tLWZpZWxkLXZhbHVlLXdpZGdldC9jdXN0b20tZmllbGQtdmFsdWUtd2lkZ2V0LWNvbnRyb2xsZXItZmluZC1hbGwnO1xuaW1wb3J0IHsgQ3VzdG9tRmllbGRWYWx1ZVdpZGdldENvbnRyb2xsZXJGaW5kQWxsJFBhcmFtcyB9IGZyb20gJy4uL2ZuL2N1c3RvbS1maWVsZC12YWx1ZS13aWRnZXQvY3VzdG9tLWZpZWxkLXZhbHVlLXdpZGdldC1jb250cm9sbGVyLWZpbmQtYWxsJztcbmltcG9ydCB7IFRvb2xzQ3VzdG9tRmllbGRWYWx1ZVdpZGdldER0byB9IGZyb20gJy4uL21vZGVscy90b29scy1jdXN0b20tZmllbGQtdmFsdWUtd2lkZ2V0LWR0byc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tRmllbGRWYWx1ZVdpZGdldFNlcnZpY2UgZXh0ZW5kcyBCYXNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQXBpQ29uZmlndXJhdGlvbiwgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHN1cGVyKGNvbmZpZywgaHR0cCk7XG4gIH1cblxuICAvKiogUGF0aCBwYXJ0IGZvciBvcGVyYXRpb24gYGN1c3RvbUZpZWxkVmFsdWVXaWRnZXRDb250cm9sbGVyRmluZEFsbCgpYCAqL1xuICBzdGF0aWMgcmVhZG9ubHkgQ3VzdG9tRmllbGRWYWx1ZVdpZGdldENvbnRyb2xsZXJGaW5kQWxsUGF0aCA9ICcvYXV0aC9jdXN0b21fZmllbGRfdmFsdWUvY3VzdG9tX2ZpZWxkX3ZhbHVlX3dpZGdldCc7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZnVsbCBgSHR0cFJlc3BvbnNlYCwgYWxsb3dpbmcgYWNjZXNzIHRvIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAqIFRvIGFjY2VzcyBvbmx5IHRoZSByZXNwb25zZSBib2R5LCB1c2UgYGN1c3RvbUZpZWxkVmFsdWVXaWRnZXRDb250cm9sbGVyRmluZEFsbCgpYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBzZW5kcyBgYXBwbGljYXRpb24vanNvbmAgYW5kIGhhbmRsZXMgcmVxdWVzdCBib2R5IG9mIHR5cGUgYGFwcGxpY2F0aW9uL2pzb25gLlxuICAgKi9cbiAgY3VzdG9tRmllbGRWYWx1ZVdpZGdldENvbnRyb2xsZXJGaW5kQWxsJFJlc3BvbnNlKHBhcmFtczogQ3VzdG9tRmllbGRWYWx1ZVdpZGdldENvbnRyb2xsZXJGaW5kQWxsJFBhcmFtcywgY29udGV4dD86IEh0dHBDb250ZXh0KTogT2JzZXJ2YWJsZTxTdHJpY3RIdHRwUmVzcG9uc2U8e1xuJ2NvZGUnPzogbnVtYmVyO1xuJ3Blc2FuJz86IHN0cmluZztcbidkYXRhJz86IEFycmF5PFRvb2xzQ3VzdG9tRmllbGRWYWx1ZVdpZGdldER0bz47XG4ndG90YWwnPzogbnVtYmVyO1xufT4+IHtcbiAgICByZXR1cm4gY3VzdG9tRmllbGRWYWx1ZVdpZGdldENvbnRyb2xsZXJGaW5kQWxsKHRoaXMuaHR0cCwgdGhpcy5yb290VXJsLCBwYXJhbXMsIGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGFjY2VzcyBvbmx5IHRvIHRoZSByZXNwb25zZSBib2R5LlxuICAgKiBUbyBhY2Nlc3MgdGhlIGZ1bGwgcmVzcG9uc2UgKGZvciBoZWFkZXJzLCBmb3IgZXhhbXBsZSksIGBjdXN0b21GaWVsZFZhbHVlV2lkZ2V0Q29udHJvbGxlckZpbmRBbGwkUmVzcG9uc2UoKWAgaW5zdGVhZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgc2VuZHMgYGFwcGxpY2F0aW9uL2pzb25gIGFuZCBoYW5kbGVzIHJlcXVlc3QgYm9keSBvZiB0eXBlIGBhcHBsaWNhdGlvbi9qc29uYC5cbiAgICovXG4gIGN1c3RvbUZpZWxkVmFsdWVXaWRnZXRDb250cm9sbGVyRmluZEFsbChwYXJhbXM6IEN1c3RvbUZpZWxkVmFsdWVXaWRnZXRDb250cm9sbGVyRmluZEFsbCRQYXJhbXMsIGNvbnRleHQ/OiBIdHRwQ29udGV4dCk6IE9ic2VydmFibGU8e1xuJ2NvZGUnPzogbnVtYmVyO1xuJ3Blc2FuJz86IHN0cmluZztcbidkYXRhJz86IEFycmF5PFRvb2xzQ3VzdG9tRmllbGRWYWx1ZVdpZGdldER0bz47XG4ndG90YWwnPzogbnVtYmVyO1xufT4ge1xuICAgIHJldHVybiB0aGlzLmN1c3RvbUZpZWxkVmFsdWVXaWRnZXRDb250cm9sbGVyRmluZEFsbCRSZXNwb25zZShwYXJhbXMsIGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoKHI6IFN0cmljdEh0dHBSZXNwb25zZTx7XG4nY29kZSc/OiBudW1iZXI7XG4ncGVzYW4nPzogc3RyaW5nO1xuJ2RhdGEnPzogQXJyYXk8VG9vbHNDdXN0b21GaWVsZFZhbHVlV2lkZ2V0RHRvPjtcbid0b3RhbCc/OiBudW1iZXI7XG59Pik6IHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBBcnJheTxUb29sc0N1c3RvbUZpZWxkVmFsdWVXaWRnZXREdG8+O1xuJ3RvdGFsJz86IG51bWJlcjtcbn0gPT4gci5ib2R5KVxuICAgICk7XG4gIH1cblxufVxuIl19