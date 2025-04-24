import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'currency', loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule) },
    { path: 'engineer-pmtr', loadChildren: () => import('./engineer-pmtr/engineer-pmtr.module').then(m => m.EngineerPmtrModule) },
    { path: 'engineer-pmtr-item', loadChildren: () => import('./engineer-pmtr-item/engineer-pmtr-item.module').then(m => m.EngineerPmtrItemModule) },
    { path: 'engineer-pris', loadChildren: () => import('./engineer-pris/engineer-pris.module').then(m => m.EngineerPrisModule) },
    { path: 'engineer-pris-item', loadChildren: () => import('./engineer-pris-item/engineer-pris-item.module').then(m => m.EngineerPrisItemModule) },
    { path: 'engineer-pris-return', loadChildren: () => import('./engineer-pris-return/engineer-pris-return.module').then(m => m.EngineerPrisReturnModule) },
    { path: 'engineer-pris-return-item', loadChildren: () => import('./engineer-pris-return-item/engineer-pris-return-item.module').then(m => m.EngineerPrisReturnItemModule) },
    { path: 'mpc-gse', loadChildren: () => import('./mpc-gse/mpc-gse.module').then(m => m.MpcGseModule) },
    { path: 'mpc-jo', loadChildren: () => import('./mpc-jo/mpc-jo.module').then(m => m.MpcJoModule) },
    { path: 'mpc-jo-operator', loadChildren: () => import('./mpc-jo-operator/mpc-jo-operator.module').then(m => m.MpcJoOperatorModule) },
    { path: 'mpc-piro', loadChildren: () => import('./mpc-piro/mpc-piro.module').then(m => m.MpcPiroModule) },
    { path: 'mpc-piro-item', loadChildren: () => import('./mpc-piro-item/mpc-piro-item.module').then(m => m.MpcPiroItemModule) },
    { path: 'mpc-self-maintenance', loadChildren: () => import('./mpc-self-maintenance/mpc-self-maintenance.module').then(m => m.MpcSelfMaintenanceModule) },
    { path: 'mpc-wp', loadChildren: () => import('./mpc-wp/mpc-wp.module').then(m => m.MpcWpModule) },
    
    { path: 'pur-grn', loadChildren: () => import('./pur-grn/pur-grn.module').then(m => m.PurGrnModule) },
    { path: 'pur-grn-item', loadChildren: () => import('./pur-grn-item/pur-grn-item.module').then(m => m.PurGrnItemModule) },
    { path: 'pur-po', loadChildren: () => import('./pur-po/pur-po.module').then(m => m.PurPoModule) },
    { path: 'pur-po-item', loadChildren: () => import('./pur-po-item/pur-po-item.module').then(m => m.PurPoItemModule) },
    { path: 'pur-pr', loadChildren: () => import('./pur-pr/pur-pr.module').then(m => m.PurPrModule) },
    { path: 'pur-pr-item', loadChildren: () => import('./pur-pr-item/pur-pr-item.module').then(m => m.PurPrItemModule) },
    { path: 'pur-prcl', loadChildren: () => import('./pur-prcl/pur-prcl.module').then(m => m.PurPrclModule) },
    { path: 'pur-return', loadChildren: () => import('./pur-return/pur-return.module').then(m => m.PurReturnModule) },
    { path: 'pur-return-item', loadChildren: () => import('./pur-return-item/pur-return-item.module').then(m => m.PurReturnItemModule) },
    { path: 'pur-vendor', loadChildren: () => import('./pur-vendor/pur-vendor.module').then(m => m.PurVendorModule) },
    { path: 'pur-vendor-contact', loadChildren: () => import('./pur-vendor-contact/pur-vendor-contact.module').then(m => m.PurVendorContactModule) },
    { path: 'pur-vendor-item', loadChildren: () => import('./pur-vendor-item/pur-vendor-item.module').then(m => m.PurVendorItemModule) },
    { path: 'qa-rpd', loadChildren: () => import('./qa-rpd/qa-rpd.module').then(m => m.QaRpdModule) },
    { path: 'qa-rpd-dispotition', loadChildren: () => import('./qa-rpd-dispotition/qa-rpd-dispotition.module').then(m => m.QaRpdDispotitionModule) },
    { path: 'qa-transfer', loadChildren: () => import('./qa-transfer/qa-transfer.module').then(m => m.QaTransferModule) },
    { path: 'qa-transfer-item', loadChildren: () => import('./qa-transfer-item/qa-transfer-item.module').then(m => m.QaTransferItemModule) },
    { path: 'site', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },
    { path: 'store-destroy', loadChildren: () => import('./store-destroy/store-destroy.module').then(m => m.StoreDestroyModule) },
    { path: 'store-transfer', loadChildren: () => import('./store-transfer/store-transfer.module').then(m => m.StoreTransferModule) },
    { path: 'store-transfer-item', loadChildren: () => import('./store-transfer-item/store-transfer-item.module').then(m => m.StoreTransferItemModule) },
    { path: 'td', loadChildren: () => import('./td/td.module').then(m => m.TdModule) },
    { path: 'td-detail', loadChildren: () => import('./td-detail/td-detail.module').then(m => m.TdDetailModule) },
    { path: 'td-detail-ac', loadChildren: () => import('./td-detail-ac/td-detail-ac.module').then(m => m.TdDetailAcModule) },
    { path: 'td-ref', loadChildren: () => import('./td-ref/td-ref.module').then(m => m.TdRefModule) },
    { path: 'td-type', loadChildren: () => import('./td-type/td-type.module').then(m => m.TdTypeModule) },

    { path: 'internal-grn', loadChildren: () => import('./internal-grn/internal-grn.module').then(m => m.InternalGrnModule) },
    { path: 'internal-grn-item', loadChildren: () => import('./internal-grn-item/internal-grn-item.module').then(m => m.InternalGrnItemModule) },
];
 
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AmimsErpRoutingModule { }
