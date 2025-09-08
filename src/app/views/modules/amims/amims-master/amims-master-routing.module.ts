import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'',
        redirectTo:'ata',
        pathMatch:'full'
    },

    { path: 'currency', loadChildren: () => import('./currency/currency.module').then(m => m.CurrencyModule) },
    { path: 'ata', loadChildren: () => import('./ata/ata.module').then(m => m.AtaModule) },
    
    { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
    { path: 'doctype', loadChildren: () => import('./doctype/doctype.module').then(m => m.DoctypeModule) },
    // { path: 'figure-index', loadChildren: () => import('./figure-index/figure-index.module').then(m => m.FigureIndexModule) }, 
    // { path: 'lib-upload', loadChildren: () => import('./lib-upload/lib-upload.module').then(m => m.LibUploadModule) },
    // { path: 'life-time-limit', loadChildren: () => import('./life-time-limit/life-time-limit.module').then(m => m.LifeTimeLimitModule) },
    { path: 'location-flight', loadChildren: () => import('./location-flight/location-flight.module').then(m => m.LocationFlightModule) },
    { path: 'mel', loadChildren: () => import('./mel/mel.module').then(m => m.MelModule) },
    
    { path: 'pilot', loadChildren: () => import('./pilot/pilot.module').then(m => m.PilotModule) }, 
    { path: 'shipping', loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule) }, 
    // { path: 'warranty', loadChildren: () => import('./warranty/warranty.module').then(m => m.WarrantyModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmimsMasterRoutingModule { }
