import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'',
        redirectTo:'actype'
    },
    {
        path: 'actype',
        loadChildren: () => import('./actype/actype.module').then(m => m.ActypeModule)
    },

    {
        path: 'aircraft',
        loadChildren: () => import('./aircraft/aircraft.module').then(m => m.AircraftModule)
    },

    {
        path: 'aircraft-detail',
        loadChildren: () => import('./aircraft-detail/aircraft-detail.module').then(m => m.AircraftDetailModule)
    },

    {
        path: 'ata',
        loadChildren: () => import('./ata/ata.module').then(m => m.AtaModule)
    },

    {
        path: 'bin',
        loadChildren: () => import('./bin/bin.module').then(m => m.BinModule)
    },

    {
        path: 'company',
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)
    },

    {
        path: 'condition-monitoring',
        loadChildren: () => import('./condition-monitoring/condition-monitoring.module').then(m => m.ConditionMonitoringModule)
    },

    {
        path: 'currency',
        loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule)
    },

    {
        path: 'doctype',
        loadChildren: () => import('./doctype/doctype.module').then(m => m.DoctypeModule)
    },

    {
        path: 'due-list',
        loadChildren: () => import('./due-list/due-list.module').then(m => m.DueListModule)
    },

    {
        path: 'due-list-output',
        loadChildren: () => import('./due-list-output/due-list-output.module').then(m => m.DueListOutputModule)
    },

    {
        path: 'engineer-pmtr',
        loadChildren: () => import('./engineer-pmtr/engineer-pmtr.module').then(m => m.EngineerPmtrModule)
    },

    {
        path: 'engineer-pmtr-item',
        loadChildren: () => import('./engineer-pmtr-item/engineer-pmtr-item.module').then(m => m.EngineerPmtrItemModule)
    },

    {
        path: 'engineer-pris',
        loadChildren: () => import('./engineer-pris/engineer-pris.module').then(m => m.EngineerPrisModule)
    },

    {
        path: 'engineer-pris-item',
        loadChildren: () => import('./engineer-pris-item/engineer-pris-item.module').then(m => m.EngineerPrisItemModule)
    },

    {
        path: 'engineer-pris-return',
        loadChildren: () => import('./engineer-pris-return/engineer-pris-return.module').then(m => m.EngineerPrisReturnModule)
    },

    {
        path: 'engineer-pris-return-item',
        loadChildren: () => import('./engineer-pris-return-item/engineer-pris-return-item.module').then(m => m.EngineerPrisReturnItemModule)
    },

    {
        path: 'engineer-rti',
        loadChildren: () => import('./engineer-rti/engineer-rti.module').then(m => m.EngineerRtiModule)
    },

    {
        path: 'engineer-rti-identify',
        loadChildren: () => import('./engineer-rti-identify/engineer-rti-identify.module').then(m => m.EngineerRtiIdentifyModule)
    },

    {
        path: 'engineer-rti-part',
        loadChildren: () => import('./engineer-rti-part/engineer-rti-part.module').then(m => m.EngineerRtiPartModule)
    },

    {
        path: 'figure-index',
        loadChildren: () => import('./figure-index/figure-index.module').then(m => m.FigureIndexModule)
    },

    {
        path: 'inspection',
        loadChildren: () => import('./inspection/inspection.module').then(m => m.InspectionModule)
    },

    {
        path: 'internal-grn',
        loadChildren: () => import('./internal-grn/internal-grn.module').then(m => m.InternalGrnModule)
    },

    {
        path: 'internal-grn-item',
        loadChildren: () => import('./internal-grn-item/internal-grn-item.module').then(m => m.InternalGrnItemModule)
    },

    {
        path: 'last-maintenance',
        loadChildren: () => import('./last-maintenance/last-maintenance.module').then(m => m.LastMaintenanceModule)
    },

    {
        path: 'lib-form-issued',
        loadChildren: () => import('./lib-form-issued/lib-form-issued.module').then(m => m.LibFormIssuedModule)
    },

    {
        path: 'lib-reference',
        loadChildren: () => import('./lib-reference/lib-reference.module').then(m => m.LibReferenceModule)
    },

    {
        path: 'lib-upload',
        loadChildren: () => import('./lib-upload/lib-upload.module').then(m => m.LibUploadModule)
    },

    {
        path: 'life-time-limit',
        loadChildren: () => import('./life-time-limit/life-time-limit.module').then(m => m.LifeTimeLimitModule)
    },

    {
        path: 'location-flight',
        loadChildren: () => import('./location-flight/location-flight.module').then(m => m.LocationFlightModule)
    },

    {
        path: 'log-process',
        loadChildren: () => import('./log-process/log-process.module').then(m => m.LogProcessModule)
    },

    {
        path: 'log-sp',
        loadChildren: () => import('./log-sp/log-sp.module').then(m => m.LogSpModule)
    },

    {
        path: 'log-transfer',
        loadChildren: () => import('./log-transfer/log-transfer.module').then(m => m.LogTransferModule)
    },

    {
        path: 'log-tsn-tso',
        loadChildren: () => import('./log-tsn-tso/log-tsn-tso.module').then(m => m.LogTsnTsoModule)
    },

    {
        path: 'log-user',
        loadChildren: () => import('./log-user/log-user.module').then(m => m.LogUserModule)
    },

    {
        path: 'maintenance',
        loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)
    },

    {
        path: 'maintenance-code',
        loadChildren: () => import('./maintenance-code/maintenance-code.module').then(m => m.MaintenanceCodeModule)
    },

    {
        path: 'maintenance-code-form-issued',
        loadChildren: () => import('./maintenance-code-form-issued/maintenance-code-form-issued.module').then(m => m.MaintenanceCodeFormIssuedModule)
    },

    {
        path: 'maintenance-code-reference',
        loadChildren: () => import('./maintenance-code-reference/maintenance-code-reference.module').then(m => m.MaintenanceCodeReferenceModule)
    },

    {
        path: 'mel',
        loadChildren: () => import('./mel/mel.module').then(m => m.MelModule)
    },

    {
        path: 'mpc-gse',
        loadChildren: () => import('./mpc-gse/mpc-gse.module').then(m => m.MpcGseModule)
    },

    {
        path: 'mpc-jo',
        loadChildren: () => import('./mpc-jo/mpc-jo.module').then(m => m.MpcJoModule)
    },

    {
        path: 'mpc-jo-operator',
        loadChildren: () => import('./mpc-jo-operator/mpc-jo-operator.module').then(m => m.MpcJoOperatorModule)
    },

    {
        path: 'mpc-piro',
        loadChildren: () => import('./mpc-piro/mpc-piro.module').then(m => m.MpcPiroModule)
    },

    {
        path: 'mpc-piro-item',
        loadChildren: () => import('./mpc-piro-item/mpc-piro-item.module').then(m => m.MpcPiroItemModule)
    },

    {
        path: 'mpc-self-maintenance',
        loadChildren: () => import('./mpc-self-maintenance/mpc-self-maintenance.module').then(m => m.MpcSelfMaintenanceModule)
    },

    {
        path: 'mpc-wp',
        loadChildren: () => import('./mpc-wp/mpc-wp.module').then(m => m.MpcWpModule)
    },

    {
        path: 'part',
        loadChildren: () => import('./part/part.module').then(m => m.PartModule)
    },

    {
        path: 'part-actype',
        loadChildren: () => import('./part-actype/part-actype.module').then(m => m.PartActypeModule)
    },

    {
        path: 'part-alternative',
        loadChildren: () => import('./part-alternative/part-alternative.module').then(m => m.PartAlternativeModule)
    },

    {
        path: 'part-ata',
        loadChildren: () => import('./part-ata/part-ata.module').then(m => m.PartAtaModule)
    },

    {
        path: 'part-category',
        loadChildren: () => import('./part-category/part-category.module').then(m => m.PartCategoryModule)
    },

    {
        path: 'part-condition',
        loadChildren: () => import('./part-condition/part-condition.module').then(m => m.PartConditionModule)
    },

    {
        path: 'part-figure-index',
        loadChildren: () => import('./part-figure-index/part-figure-index.module').then(m => m.PartFigureIndexModule)
    },

    {
        path: 'part-install',
        loadChildren: () => import('./part-install/part-install.module').then(m => m.PartInstallModule)
    },

    {
        path: 'part-install-old',
        loadChildren: () => import('./part-install-old/part-install-old.module').then(m => m.PartInstallOldModule)
    },

    {
        path: 'part-log',
        loadChildren: () => import('./part-log/part-log.module').then(m => m.PartLogModule)
    },

    {
        path: 'partid',
        loadChildren: () => import('./partid/partid.module').then(m => m.PartidModule)
    },

    {
        path: 'pilot',
        loadChildren: () => import('./pilot/pilot.module').then(m => m.PilotModule)
    },

    {
        path: 'position',
        loadChildren: () => import('./position/position.module').then(m => m.PositionModule)
    },

    {
        path: 'pur-grn',
        loadChildren: () => import('./pur-grn/pur-grn.module').then(m => m.PurGrnModule)
    },

    {
        path: 'pur-grn-item',
        loadChildren: () => import('./pur-grn-item/pur-grn-item.module').then(m => m.PurGrnItemModule)
    },

    {
        path: 'pur-po',
        loadChildren: () => import('./pur-po/pur-po.module').then(m => m.PurPoModule)
    },

    {
        path: 'pur-po-item',
        loadChildren: () => import('./pur-po-item/pur-po-item.module').then(m => m.PurPoItemModule)
    },

    {
        path: 'pur-pr',
        loadChildren: () => import('./pur-pr/pur-pr.module').then(m => m.PurPrModule)
    },

    {
        path: 'pur-pr-item',
        loadChildren: () => import('./pur-pr-item/pur-pr-item.module').then(m => m.PurPrItemModule)
    },

    {
        path: 'pur-prcl',
        loadChildren: () => import('./pur-prcl/pur-prcl.module').then(m => m.PurPrclModule)
    },

    {
        path: 'pur-return',
        loadChildren: () => import('./pur-return/pur-return.module').then(m => m.PurReturnModule)
    },

    {
        path: 'pur-return-item',
        loadChildren: () => import('./pur-return-item/pur-return-item.module').then(m => m.PurReturnItemModule)
    },

    {
        path: 'pur-vendor',
        loadChildren: () => import('./pur-vendor/pur-vendor.module').then(m => m.PurVendorModule)
    },

    {
        path: 'pur-vendor-contact',
        loadChildren: () => import('./pur-vendor-contact/pur-vendor-contact.module').then(m => m.PurVendorContactModule)
    },

    {
        path: 'pur-vendor-item',
        loadChildren: () => import('./pur-vendor-item/pur-vendor-item.module').then(m => m.PurVendorItemModule)
    },

    {
        path: 'qa-rpd',
        loadChildren: () => import('./qa-rpd/qa-rpd.module').then(m => m.QaRpdModule)
    },

    {
        path: 'qa-rpd-dispotition',
        loadChildren: () => import('./qa-rpd-dispotition/qa-rpd-dispotition.module').then(m => m.QaRpdDispotitionModule)
    },

    {
        path: 'qa-transfer',
        loadChildren: () => import('./qa-transfer/qa-transfer.module').then(m => m.QaTransferModule)
    },

    {
        path: 'qa-transfer-item',
        loadChildren: () => import('./qa-transfer-item/qa-transfer-item.module').then(m => m.QaTransferItemModule)
    },

    {
        path: 'rotary-factor',
        loadChildren: () => import('./rotary-factor/rotary-factor.module').then(m => m.RotaryFactorModule)
    },

    {
        path: 'shipping',
        loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule)
    },

    {
        path: 'site',
        loadChildren: () => import('./site/site.module').then(m => m.SiteModule)
    },

    {
        path: 'store-destroy',
        loadChildren: () => import('./store-destroy/store-destroy.module').then(m => m.StoreDestroyModule)
    },

    {
        path: 'store-transfer',
        loadChildren: () => import('./store-transfer/store-transfer.module').then(m => m.StoreTransferModule)
    },

    {
        path: 'store-transfer-item',
        loadChildren: () => import('./store-transfer-item/store-transfer-item.module').then(m => m.StoreTransferItemModule)
    },

    {
        path: 'td',
        loadChildren: () => import('./td/td.module').then(m => m.TdModule)
    },

    {
        path: 'td-detail',
        loadChildren: () => import('./td-detail/td-detail.module').then(m => m.TdDetailModule)
    },

    {
        path: 'td-detail-ac',
        loadChildren: () => import('./td-detail-ac/td-detail-ac.module').then(m => m.TdDetailAcModule)
    },

    {
        path: 'td-ref',
        loadChildren: () => import('./td-ref/td-ref.module').then(m => m.TdRefModule)
    },

    {
        path: 'td-type',
        loadChildren: () => import('./td-type/td-type.module').then(m => m.TdTypeModule)
    },

    {
        path: 'tech-defect',
        loadChildren: () => import('./tech-defect/tech-defect.module').then(m => m.TechDefectModule)
    },

    {
        path: 'tech-discrepancies',
        loadChildren: () => import('./tech-discrepancies/tech-discrepancies.module').then(m => m.TechDiscrepanciesModule)
    },

    {
        path: 'tech-log',
        loadChildren: () => import('./tech-log/tech-log.module').then(m => m.TechLogModule)
    },

    {
        path: 'tech-log-engine',
        loadChildren: () => import('./tech-log-engine/tech-log-engine.module').then(m => m.TechLogEngineModule)
    },

    {
        path: 'tech-log-engine-check',
        loadChildren: () => import('./tech-log-engine-check/tech-log-engine-check.module').then(m => m.TechLogEngineCheckModule)
    },

    {
        path: 'tech-log-item',
        loadChildren: () => import('./tech-log-item/tech-log-item.module').then(m => m.TechLogItemModule)
    },

    {
        path: 'tech-log-jo',
        loadChildren: () => import('./tech-log-jo/tech-log-jo.module').then(m => m.TechLogJoModule)
    },

    {
        path: 'type-ofwork',
        loadChildren: () => import('./type-ofwork/type-ofwork.module').then(m => m.TypeOfworkModule)
    },

    {
        path: 'warranty',
        loadChildren: () => import('./warranty/warranty.module').then(m => m.WarrantyModule)
    },

    {
        path: 'mpart',
        loadChildren: () => import('./mpart/mpart.module').then(m => m.MpartModule)
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AmimsRoutingModule { }
