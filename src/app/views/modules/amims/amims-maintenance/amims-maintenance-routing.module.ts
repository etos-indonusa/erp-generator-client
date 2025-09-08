import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'actype', loadChildren: () => import('./actype/actype.module').then(m => m.ActypeModule) },
    { path: 'aircraft', loadChildren: () => import('./aircraft/aircraft.module').then(m => m.AircraftModule) },
    // { path: 'aircraft-detail', loadChildren: () => import('./aircraft-detail/aircraft-detail.module').then(m => m.AircraftDetailModule) },  
    // { path: 'due-list-output', loadChildren: () => import('./due-list-output_old/due-list-output.module').then(m => m.DueListOutputModule) },

    { path: 'engineer-rti', loadChildren: () => import('./engineer-rti/engineer-rti.module').then(m => m.EngineerRtiModule) },
    // { path: 'engineer-rti-identify', loadChildren: () => import('./engineer-rti-identify/engineer-rti-identify.module').then(m => m.EngineerRtiIdentifyModule) },
    // { path: 'engineer-rti-part', loadChildren: () => import('./engineer-rti-part/engineer-rti-part.module').then(m => m.EngineerRtiPartModule) }, 
    { path: 'last-maintenance', loadChildren: () => import('./last-maintenance/last-maintenance.module').then(m => m.LastMaintenanceModule) },
    // { path: 'log-process', loadChildren: () => import('./log-process/log-process.module').then(m => m.LogProcessModule) },
    // { path: 'log-sp', loadChildren: () => import('./log-sp/log-sp.module').then(m => m.LogSpModule) },
    // { path: 'log-transfer', loadChildren: () => import('./log-transfer/log-transfer.module').then(m => m.LogTransferModule) },
    // { path: 'log-tsn-tso', loadChildren: () => import('./log-tsn-tso/log-tsn-tso.module').then(m => m.LogTsnTsoModule) },
    // { path: 'log-user', loadChildren: () => import('./log-user/log-user.module').then(m => m.LogUserModule) },
    // { path: 'maintenance', loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule) },
    { path: 'maintenance-code', loadChildren: () => import('./maintenance-code/maintenance-code.module').then(m => m.MaintenanceCodeModule) }, 
    // { path: 'rotary-factor', loadChildren: () => import('./rotary-factor/rotary-factor.module').then(m => m.RotaryFactorModule) },
    // { path: 'tech-defect', loadChildren: () => import('./tech-defect/tech-defect.module').then(m => m.TechDefectModule) },
    // { path: 'tech-discrepancies', loadChildren: () => import('./tech-discrepancies/tech-discrepancies.module').then(m => m.TechDiscrepanciesModule) },
    { path: 'tech-log', loadChildren: () => import('./tech-log/tech-log.module').then(m => m.TechLogModule) },
    { path: 'tech-log-engine', loadChildren: () => import('./tech-log/tech-log-engine/tech-log-engine.module').then(m => m.TechLogEngineModule) },
    { path: 'tech-log-engine-check', loadChildren: () => import('./tech-log/tech-log-engine-check/tech-log-engine-check.module').then(m => m.TechLogEngineCheckModule) },
    { path: 'tech-log-item', loadChildren: () => import('./tech-log/tech-log-item/tech-log-item.module').then(m => m.TechLogItemModule) },
    { path: 'tech-log-jo', loadChildren: () => import('./tech-log/tech-log-jo/tech-log-jo.module').then(m => m.TechLogJoModule) },
    {
        path: 'v-due-list-output',
        loadChildren: () => import('./v-due-list-output/v-due-list-output.module').then(m => m.VDueListOutputModule)
    },
    {
        path: 'unschedule-maintenance',
        loadChildren: () => import('./unschedule-maintenance/unschedule-maintenance.module').then(m => m.UnscheduleMaintenanceModule)
    },
    {
        path: 'maintenance',
        loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AmimsMaintenanceRoutingModule { }
