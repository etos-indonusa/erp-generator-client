/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { workflowAggregatorControllerCreate } from '../fn/workflow-aggregator/workflow-aggregator-controller-create';
import { workflowAggregatorControllerFindAll } from '../fn/workflow-aggregator/workflow-aggregator-controller-find-all';
import { workflowAggregatorControllerFindOne } from '../fn/workflow-aggregator/workflow-aggregator-controller-find-one';
import { workflowAggregatorControllerRemove } from '../fn/workflow-aggregator/workflow-aggregator-controller-remove';
import { workflowAggregatorControllerUpdate } from '../fn/workflow-aggregator/workflow-aggregator-controller-update';
import * as i0 from "@angular/core";
import * as i1 from "../api-configuration";
import * as i2 from "@angular/common/http";
export class WorkflowAggregatorService extends BaseService {
    constructor(config, http) {
        super(config, http);
    }
    /** Path part for operation `workflowAggregatorControllerFindAll()` */
    static { this.WorkflowAggregatorControllerFindAllPath = '/auth/workflow_aggregator/workflow_aggregator'; }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerFindAll()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerFindAll$Response(params, context) {
        return workflowAggregatorControllerFindAll(this.http, this.rootUrl, params, context);
    }
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerFindAll$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerFindAll(params, context) {
        return this.workflowAggregatorControllerFindAll$Response(params, context).pipe(map((r) => r.body));
    }
    /** Path part for operation `workflowAggregatorControllerCreate()` */
    static { this.WorkflowAggregatorControllerCreatePath = '/auth/workflow_aggregator/workflow_aggregator'; }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerCreate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowAggregatorControllerCreate$Response(params, context) {
        return workflowAggregatorControllerCreate(this.http, this.rootUrl, params, context);
    }
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerCreate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowAggregatorControllerCreate(params, context) {
        return this.workflowAggregatorControllerCreate$Response(params, context).pipe(map((r) => r.body));
    }
    /** Path part for operation `workflowAggregatorControllerFindOne()` */
    static { this.WorkflowAggregatorControllerFindOnePath = '/auth/workflow_aggregator/workflow_aggregator/{id}'; }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerFindOne()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerFindOne$Response(params, context) {
        return workflowAggregatorControllerFindOne(this.http, this.rootUrl, params, context);
    }
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerFindOne$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerFindOne(params, context) {
        return this.workflowAggregatorControllerFindOne$Response(params, context).pipe(map((r) => r.body));
    }
    /** Path part for operation `workflowAggregatorControllerUpdate()` */
    static { this.WorkflowAggregatorControllerUpdatePath = '/auth/workflow_aggregator/workflow_aggregator/{id}'; }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerUpdate()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowAggregatorControllerUpdate$Response(params, context) {
        return workflowAggregatorControllerUpdate(this.http, this.rootUrl, params, context);
    }
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerUpdate$Response()` instead.
     *
     * This method sends `application/json` and handles request body of type `application/json`.
     */
    workflowAggregatorControllerUpdate(params, context) {
        return this.workflowAggregatorControllerUpdate$Response(params, context).pipe(map((r) => r.body));
    }
    /** Path part for operation `workflowAggregatorControllerRemove()` */
    static { this.WorkflowAggregatorControllerRemovePath = '/auth/workflow_aggregator/workflow_aggregator/{id}'; }
    /**
     * This method provides access to the full `HttpResponse`, allowing access to response headers.
     * To access only the response body, use `workflowAggregatorControllerRemove()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerRemove$Response(params, context) {
        return workflowAggregatorControllerRemove(this.http, this.rootUrl, params, context);
    }
    /**
     * This method provides access only to the response body.
     * To access the full response (for headers, for example), `workflowAggregatorControllerRemove$Response()` instead.
     *
     * This method doesn't expect any request body.
     */
    workflowAggregatorControllerRemove(params, context) {
        return this.workflowAggregatorControllerRemove$Response(params, context).pipe(map((r) => r.body));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WorkflowAggregatorService, deps: [{ token: i1.ApiConfiguration }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WorkflowAggregatorService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: WorkflowAggregatorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [{ type: i1.ApiConfiguration }, { type: i2.HttpClient }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2Zsb3ctYWdncmVnYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc2RrY29yZS9zcmMvbGliL3NlcnZpY2VzL3dvcmtmbG93LWFnZ3JlZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCLG1EQUFtRDtBQUVuRCxPQUFPLEVBQUUsVUFBVSxFQUFlLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSXhELE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRXJILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBRXhILE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBRXhILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRXJILE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBSXJILE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxXQUFXO0lBQ3hELFlBQVksTUFBd0IsRUFBRSxJQUFnQjtRQUNwRCxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxzRUFBc0U7YUFDdEQsNENBQXVDLEdBQUcsK0NBQStDLEFBQWxELENBQW1EO0lBRTFHOzs7OztPQUtHO0lBQ0gsNENBQTRDLENBQUMsTUFBbUQsRUFBRSxPQUFxQjtRQU1ySCxPQUFPLG1DQUFtQyxDQUFD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Q0FBQyxDQUNQLENBQUM7SUFDSixDQUFDOytHQXBOVSx5QkFBeUI7bUhBQXpCLHlCQUF5QixjQURaLE1BQU07OzRGQUNuQix5QkFBeUI7a0JBRHJDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUgKi9cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKiBDb2RlIGdlbmVyYXRlZCBieSBuZy1vcGVuYXBpLWdlbiBETyBOT1QgRURJVC4gKi9cblxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSAnLi4vYmFzZS1zZXJ2aWNlJztcbmltcG9ydCB7IEFwaUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi9hcGktY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBTdHJpY3RIdHRwUmVzcG9uc2UgfSBmcm9tICcuLi9zdHJpY3QtaHR0cC1yZXNwb25zZSc7XG5cbmltcG9ydCB7IFRvb2xzV29ya2Zsb3dBZ2dyZWdhdG9yRHRvIH0gZnJvbSAnLi4vbW9kZWxzL3Rvb2xzLXdvcmtmbG93LWFnZ3JlZ2F0b3ItZHRvJztcbmltcG9ydCB7IHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJDcmVhdGUgfSBmcm9tICcuLi9mbi93b3JrZmxvdy1hZ2dyZWdhdG9yL3dvcmtmbG93LWFnZ3JlZ2F0b3ItY29udHJvbGxlci1jcmVhdGUnO1xuaW1wb3J0IHsgV29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckNyZWF0ZSRQYXJhbXMgfSBmcm9tICcuLi9mbi93b3JrZmxvdy1hZ2dyZWdhdG9yL3dvcmtmbG93LWFnZ3JlZ2F0b3ItY29udHJvbGxlci1jcmVhdGUnO1xuaW1wb3J0IHsgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRBbGwgfSBmcm9tICcuLi9mbi93b3JrZmxvdy1hZ2dyZWdhdG9yL3dvcmtmbG93LWFnZ3JlZ2F0b3ItY29udHJvbGxlci1maW5kLWFsbCc7XG5pbXBvcnQgeyBXb3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyRmluZEFsbCRQYXJhbXMgfSBmcm9tICcuLi9mbi93b3JrZmxvdy1hZ2dyZWdhdG9yL3dvcmtmbG93LWFnZ3JlZ2F0b3ItY29udHJvbGxlci1maW5kLWFsbCc7XG5pbXBvcnQgeyB3b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyRmluZE9uZSB9IGZyb20gJy4uL2ZuL3dvcmtmbG93LWFnZ3JlZ2F0b3Ivd29ya2Zsb3ctYWdncmVnYXRvci1jb250cm9sbGVyLWZpbmQtb25lJztcbmltcG9ydCB7IFdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kT25lJFBhcmFtcyB9IGZyb20gJy4uL2ZuL3dvcmtmbG93LWFnZ3JlZ2F0b3Ivd29ya2Zsb3ctYWdncmVnYXRvci1jb250cm9sbGVyLWZpbmQtb25lJztcbmltcG9ydCB7IHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJSZW1vdmUgfSBmcm9tICcuLi9mbi93b3JrZmxvdy1hZ2dyZWdhdG9yL3dvcmtmbG93LWFnZ3JlZ2F0b3ItY29udHJvbGxlci1yZW1vdmUnO1xuaW1wb3J0IHsgV29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclJlbW92ZSRQYXJhbXMgfSBmcm9tICcuLi9mbi93b3JrZmxvdy1hZ2dyZWdhdG9yL3dvcmtmbG93LWFnZ3JlZ2F0b3ItY29udHJvbGxlci1yZW1vdmUnO1xuaW1wb3J0IHsgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclVwZGF0ZSB9IGZyb20gJy4uL2ZuL3dvcmtmbG93LWFnZ3JlZ2F0b3Ivd29ya2Zsb3ctYWdncmVnYXRvci1jb250cm9sbGVyLXVwZGF0ZSc7XG5pbXBvcnQgeyBXb3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyVXBkYXRlJFBhcmFtcyB9IGZyb20gJy4uL2ZuL3dvcmtmbG93LWFnZ3JlZ2F0b3Ivd29ya2Zsb3ctYWdncmVnYXRvci1jb250cm9sbGVyLXVwZGF0ZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgV29ya2Zsb3dBZ2dyZWdhdG9yU2VydmljZSBleHRlbmRzIEJhc2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBBcGlDb25maWd1cmF0aW9uLCBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgc3VwZXIoY29uZmlnLCBodHRwKTtcbiAgfVxuXG4gIC8qKiBQYXRoIHBhcnQgZm9yIG9wZXJhdGlvbiBgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRBbGwoKWAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IFdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kQWxsUGF0aCA9ICcvYXV0aC93b3JrZmxvd19hZ2dyZWdhdG9yL3dvcmtmbG93X2FnZ3JlZ2F0b3InO1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGZ1bGwgYEh0dHBSZXNwb25zZWAsIGFsbG93aW5nIGFjY2VzcyB0byByZXNwb25zZSBoZWFkZXJzLlxuICAgKiBUbyBhY2Nlc3Mgb25seSB0aGUgcmVzcG9uc2UgYm9keSwgdXNlIGB3b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyRmluZEFsbCgpYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBkb2Vzbid0IGV4cGVjdCBhbnkgcmVxdWVzdCBib2R5LlxuICAgKi9cbiAgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRBbGwkUmVzcG9uc2UocGFyYW1zPzogV29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRBbGwkUGFyYW1zLCBjb250ZXh0PzogSHR0cENvbnRleHQpOiBPYnNlcnZhYmxlPFN0cmljdEh0dHBSZXNwb25zZTx7XG4nY29kZSc/OiBudW1iZXI7XG4ncGVzYW4nPzogc3RyaW5nO1xuJ2RhdGEnPzogQXJyYXk8VG9vbHNXb3JrZmxvd0FnZ3JlZ2F0b3JEdG8+O1xuJ3RvdGFsJz86IG51bWJlcjtcbn0+PiB7XG4gICAgcmV0dXJuIHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kQWxsKHRoaXMuaHR0cCwgdGhpcy5yb290VXJsLCBwYXJhbXMsIGNvbnRleHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGFjY2VzcyBvbmx5IHRvIHRoZSByZXNwb25zZSBib2R5LlxuICAgKiBUbyBhY2Nlc3MgdGhlIGZ1bGwgcmVzcG9uc2UgKGZvciBoZWFkZXJzLCBmb3IgZXhhbXBsZSksIGB3b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyRmluZEFsbCRSZXNwb25zZSgpYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBkb2Vzbid0IGV4cGVjdCBhbnkgcmVxdWVzdCBib2R5LlxuICAgKi9cbiAgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRBbGwocGFyYW1zPzogV29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRBbGwkUGFyYW1zLCBjb250ZXh0PzogSHR0cENvbnRleHQpOiBPYnNlcnZhYmxlPHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBBcnJheTxUb29sc1dvcmtmbG93QWdncmVnYXRvckR0bz47XG4ndG90YWwnPzogbnVtYmVyO1xufT4ge1xuICAgIHJldHVybiB0aGlzLndvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kQWxsJFJlc3BvbnNlKHBhcmFtcywgY29udGV4dCkucGlwZShcbiAgICAgIG1hcCgocjogU3RyaWN0SHR0cFJlc3BvbnNlPHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBBcnJheTxUb29sc1dvcmtmbG93QWdncmVnYXRvckR0bz47XG4ndG90YWwnPzogbnVtYmVyO1xufT4pOiB7XG4nY29kZSc/OiBudW1iZXI7XG4ncGVzYW4nPzogc3RyaW5nO1xuJ2RhdGEnPzogQXJyYXk8VG9vbHNXb3JrZmxvd0FnZ3JlZ2F0b3JEdG8+O1xuJ3RvdGFsJz86IG51bWJlcjtcbn0gPT4gci5ib2R5KVxuICAgICk7XG4gIH1cblxuICAvKiogUGF0aCBwYXJ0IGZvciBvcGVyYXRpb24gYHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJDcmVhdGUoKWAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IFdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJDcmVhdGVQYXRoID0gJy9hdXRoL3dvcmtmbG93X2FnZ3JlZ2F0b3Ivd29ya2Zsb3dfYWdncmVnYXRvcic7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZnVsbCBgSHR0cFJlc3BvbnNlYCwgYWxsb3dpbmcgYWNjZXNzIHRvIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAqIFRvIGFjY2VzcyBvbmx5IHRoZSByZXNwb25zZSBib2R5LCB1c2UgYHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJDcmVhdGUoKWAgaW5zdGVhZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgc2VuZHMgYGFwcGxpY2F0aW9uL2pzb25gIGFuZCBoYW5kbGVzIHJlcXVlc3QgYm9keSBvZiB0eXBlIGBhcHBsaWNhdGlvbi9qc29uYC5cbiAgICovXG4gIHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJDcmVhdGUkUmVzcG9uc2UocGFyYW1zOiBXb3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyQ3JlYXRlJFBhcmFtcywgY29udGV4dD86IEh0dHBDb250ZXh0KTogT2JzZXJ2YWJsZTxTdHJpY3RIdHRwUmVzcG9uc2U8e1xuJ2NvZGUnPzogbnVtYmVyO1xuJ3Blc2FuJz86IHN0cmluZztcbidkYXRhJz86IFRvb2xzV29ya2Zsb3dBZ2dyZWdhdG9yRHRvO1xufT4+IHtcbiAgICByZXR1cm4gd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckNyZWF0ZSh0aGlzLmh0dHAsIHRoaXMucm9vdFVybCwgcGFyYW1zLCBjb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBwcm92aWRlcyBhY2Nlc3Mgb25seSB0byB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICogVG8gYWNjZXNzIHRoZSBmdWxsIHJlc3BvbnNlIChmb3IgaGVhZGVycywgZm9yIGV4YW1wbGUpLCBgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckNyZWF0ZSRSZXNwb25zZSgpYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBzZW5kcyBgYXBwbGljYXRpb24vanNvbmAgYW5kIGhhbmRsZXMgcmVxdWVzdCBib2R5IG9mIHR5cGUgYGFwcGxpY2F0aW9uL2pzb25gLlxuICAgKi9cbiAgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckNyZWF0ZShwYXJhbXM6IFdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJDcmVhdGUkUGFyYW1zLCBjb250ZXh0PzogSHR0cENvbnRleHQpOiBPYnNlcnZhYmxlPHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBUb29sc1dvcmtmbG93QWdncmVnYXRvckR0bztcbn0+IHtcbiAgICByZXR1cm4gdGhpcy53b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyQ3JlYXRlJFJlc3BvbnNlKHBhcmFtcywgY29udGV4dCkucGlwZShcbiAgICAgIG1hcCgocjogU3RyaWN0SHR0cFJlc3BvbnNlPHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBUb29sc1dvcmtmbG93QWdncmVnYXRvckR0bztcbn0+KToge1xuJ2NvZGUnPzogbnVtYmVyO1xuJ3Blc2FuJz86IHN0cmluZztcbidkYXRhJz86IFRvb2xzV29ya2Zsb3dBZ2dyZWdhdG9yRHRvO1xufSA9PiByLmJvZHkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBQYXRoIHBhcnQgZm9yIG9wZXJhdGlvbiBgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRPbmUoKWAgKi9cbiAgc3RhdGljIHJlYWRvbmx5IFdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kT25lUGF0aCA9ICcvYXV0aC93b3JrZmxvd19hZ2dyZWdhdG9yL3dvcmtmbG93X2FnZ3JlZ2F0b3Ive2lkfSc7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZnVsbCBgSHR0cFJlc3BvbnNlYCwgYWxsb3dpbmcgYWNjZXNzIHRvIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAqIFRvIGFjY2VzcyBvbmx5IHRoZSByZXNwb25zZSBib2R5LCB1c2UgYHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kT25lKClgIGluc3RlYWQuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXhwZWN0IGFueSByZXF1ZXN0IGJvZHkuXG4gICAqL1xuICB3b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyRmluZE9uZSRSZXNwb25zZShwYXJhbXM6IFdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kT25lJFBhcmFtcywgY29udGV4dD86IEh0dHBDb250ZXh0KTogT2JzZXJ2YWJsZTxTdHJpY3RIdHRwUmVzcG9uc2U8e1xuJ2NvZGUnPzogbnVtYmVyO1xuJ3Blc2FuJz86IHN0cmluZztcbidkYXRhJz86IFRvb2xzV29ya2Zsb3dBZ2dyZWdhdG9yRHRvO1xufT4+IHtcbiAgICByZXR1cm4gd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRPbmUodGhpcy5odHRwLCB0aGlzLnJvb3RVcmwsIHBhcmFtcywgY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcHJvdmlkZXMgYWNjZXNzIG9ubHkgdG8gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAqIFRvIGFjY2VzcyB0aGUgZnVsbCByZXNwb25zZSAoZm9yIGhlYWRlcnMsIGZvciBleGFtcGxlKSwgYHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kT25lJFJlc3BvbnNlKClgIGluc3RlYWQuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXhwZWN0IGFueSByZXF1ZXN0IGJvZHkuXG4gICAqL1xuICB3b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyRmluZE9uZShwYXJhbXM6IFdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJGaW5kT25lJFBhcmFtcywgY29udGV4dD86IEh0dHBDb250ZXh0KTogT2JzZXJ2YWJsZTx7XG4nY29kZSc/OiBudW1iZXI7XG4ncGVzYW4nPzogc3RyaW5nO1xuJ2RhdGEnPzogVG9vbHNXb3JrZmxvd0FnZ3JlZ2F0b3JEdG87XG59PiB7XG4gICAgcmV0dXJuIHRoaXMud29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlckZpbmRPbmUkUmVzcG9uc2UocGFyYW1zLCBjb250ZXh0KS5waXBlKFxuICAgICAgbWFwKChyOiBTdHJpY3RIdHRwUmVzcG9uc2U8e1xuJ2NvZGUnPzogbnVtYmVyO1xuJ3Blc2FuJz86IHN0cmluZztcbidkYXRhJz86IFRvb2xzV29ya2Zsb3dBZ2dyZWdhdG9yRHRvO1xufT4pOiB7XG4nY29kZSc/OiBudW1iZXI7XG4ncGVzYW4nPzogc3RyaW5nO1xuJ2RhdGEnPzogVG9vbHNXb3JrZmxvd0FnZ3JlZ2F0b3JEdG87XG59ID0+IHIuYm9keSlcbiAgICApO1xuICB9XG5cbiAgLyoqIFBhdGggcGFydCBmb3Igb3BlcmF0aW9uIGB3b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyVXBkYXRlKClgICovXG4gIHN0YXRpYyByZWFkb25seSBXb3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyVXBkYXRlUGF0aCA9ICcvYXV0aC93b3JrZmxvd19hZ2dyZWdhdG9yL3dvcmtmbG93X2FnZ3JlZ2F0b3Ive2lkfSc7XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZnVsbCBgSHR0cFJlc3BvbnNlYCwgYWxsb3dpbmcgYWNjZXNzIHRvIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAqIFRvIGFjY2VzcyBvbmx5IHRoZSByZXNwb25zZSBib2R5LCB1c2UgYHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJVcGRhdGUoKWAgaW5zdGVhZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2Qgc2VuZHMgYGFwcGxpY2F0aW9uL2pzb25gIGFuZCBoYW5kbGVzIHJlcXVlc3QgYm9keSBvZiB0eXBlIGBhcHBsaWNhdGlvbi9qc29uYC5cbiAgICovXG4gIHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJVcGRhdGUkUmVzcG9uc2UocGFyYW1zOiBXb3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyVXBkYXRlJFBhcmFtcywgY29udGV4dD86IEh0dHBDb250ZXh0KTogT2JzZXJ2YWJsZTxTdHJpY3RIdHRwUmVzcG9uc2U8e1xuJ2NvZGUnPzogbnVtYmVyO1xuJ3Blc2FuJz86IHN0cmluZztcbidkYXRhJz86IFRvb2xzV29ya2Zsb3dBZ2dyZWdhdG9yRHRvO1xufT4+IHtcbiAgICByZXR1cm4gd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclVwZGF0ZSh0aGlzLmh0dHAsIHRoaXMucm9vdFVybCwgcGFyYW1zLCBjb250ZXh0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBwcm92aWRlcyBhY2Nlc3Mgb25seSB0byB0aGUgcmVzcG9uc2UgYm9keS5cbiAgICogVG8gYWNjZXNzIHRoZSBmdWxsIHJlc3BvbnNlIChmb3IgaGVhZGVycywgZm9yIGV4YW1wbGUpLCBgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclVwZGF0ZSRSZXNwb25zZSgpYCBpbnN0ZWFkLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBzZW5kcyBgYXBwbGljYXRpb24vanNvbmAgYW5kIGhhbmRsZXMgcmVxdWVzdCBib2R5IG9mIHR5cGUgYGFwcGxpY2F0aW9uL2pzb25gLlxuICAgKi9cbiAgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclVwZGF0ZShwYXJhbXM6IFdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJVcGRhdGUkUGFyYW1zLCBjb250ZXh0PzogSHR0cENvbnRleHQpOiBPYnNlcnZhYmxlPHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBUb29sc1dvcmtmbG93QWdncmVnYXRvckR0bztcbn0+IHtcbiAgICByZXR1cm4gdGhpcy53b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyVXBkYXRlJFJlc3BvbnNlKHBhcmFtcywgY29udGV4dCkucGlwZShcbiAgICAgIG1hcCgocjogU3RyaWN0SHR0cFJlc3BvbnNlPHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBUb29sc1dvcmtmbG93QWdncmVnYXRvckR0bztcbn0+KToge1xuJ2NvZGUnPzogbnVtYmVyO1xuJ3Blc2FuJz86IHN0cmluZztcbidkYXRhJz86IFRvb2xzV29ya2Zsb3dBZ2dyZWdhdG9yRHRvO1xufSA9PiByLmJvZHkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBQYXRoIHBhcnQgZm9yIG9wZXJhdGlvbiBgd29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclJlbW92ZSgpYCAqL1xuICBzdGF0aWMgcmVhZG9ubHkgV29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclJlbW92ZVBhdGggPSAnL2F1dGgvd29ya2Zsb3dfYWdncmVnYXRvci93b3JrZmxvd19hZ2dyZWdhdG9yL3tpZH0nO1xuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGZ1bGwgYEh0dHBSZXNwb25zZWAsIGFsbG93aW5nIGFjY2VzcyB0byByZXNwb25zZSBoZWFkZXJzLlxuICAgKiBUbyBhY2Nlc3Mgb25seSB0aGUgcmVzcG9uc2UgYm9keSwgdXNlIGB3b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyUmVtb3ZlKClgIGluc3RlYWQuXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGRvZXNuJ3QgZXhwZWN0IGFueSByZXF1ZXN0IGJvZHkuXG4gICAqL1xuICB3b3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyUmVtb3ZlJFJlc3BvbnNlKHBhcmFtczogV29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclJlbW92ZSRQYXJhbXMsIGNvbnRleHQ/OiBIdHRwQ29udGV4dCk6IE9ic2VydmFibGU8U3RyaWN0SHR0cFJlc3BvbnNlPHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBUb29sc1dvcmtmbG93QWdncmVnYXRvckR0bztcbn0+PiB7XG4gICAgcmV0dXJuIHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJSZW1vdmUodGhpcy5odHRwLCB0aGlzLnJvb3RVcmwsIHBhcmFtcywgY29udGV4dCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgcHJvdmlkZXMgYWNjZXNzIG9ubHkgdG8gdGhlIHJlc3BvbnNlIGJvZHkuXG4gICAqIFRvIGFjY2VzcyB0aGUgZnVsbCByZXNwb25zZSAoZm9yIGhlYWRlcnMsIGZvciBleGFtcGxlKSwgYHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJSZW1vdmUkUmVzcG9uc2UoKWAgaW5zdGVhZC5cbiAgICpcbiAgICogVGhpcyBtZXRob2QgZG9lc24ndCBleHBlY3QgYW55IHJlcXVlc3QgYm9keS5cbiAgICovXG4gIHdvcmtmbG93QWdncmVnYXRvckNvbnRyb2xsZXJSZW1vdmUocGFyYW1zOiBXb3JrZmxvd0FnZ3JlZ2F0b3JDb250cm9sbGVyUmVtb3ZlJFBhcmFtcywgY29udGV4dD86IEh0dHBDb250ZXh0KTogT2JzZXJ2YWJsZTx7XG4nY29kZSc/OiBudW1iZXI7XG4ncGVzYW4nPzogc3RyaW5nO1xuJ2RhdGEnPzogVG9vbHNXb3JrZmxvd0FnZ3JlZ2F0b3JEdG87XG59PiB7XG4gICAgcmV0dXJuIHRoaXMud29ya2Zsb3dBZ2dyZWdhdG9yQ29udHJvbGxlclJlbW92ZSRSZXNwb25zZShwYXJhbXMsIGNvbnRleHQpLnBpcGUoXG4gICAgICBtYXAoKHI6IFN0cmljdEh0dHBSZXNwb25zZTx7XG4nY29kZSc/OiBudW1iZXI7XG4ncGVzYW4nPzogc3RyaW5nO1xuJ2RhdGEnPzogVG9vbHNXb3JrZmxvd0FnZ3JlZ2F0b3JEdG87XG59Pik6IHtcbidjb2RlJz86IG51bWJlcjtcbidwZXNhbic/OiBzdHJpbmc7XG4nZGF0YSc/OiBUb29sc1dvcmtmbG93QWdncmVnYXRvckR0bztcbn0gPT4gci5ib2R5KVxuICAgICk7XG4gIH1cblxufVxuIl19