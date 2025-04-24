import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:'',
        redirectTo:'ata',
        pathMatch:'full'
    },
    { path: 'ata', loadChildren: () => import('./ata/ata.module').then(m => m.AtaModule) },
    
    { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule) },
    { path: 'doctype', loadChildren: () => import('./doctype/doctype.module').then(m => m.DoctypeModule) },
    // { path: 'figure-index', loadChildren: () => import('./figure-index/figure-index.module').then(m => m.FigureIndexModule) },
    { path: 'lib-form-issued', loadChildren: () => import('./lib-form-issued/lib-form-issued.module').then(m => m.LibFormIssuedModule) },
    { path: 'lib-reference', loadChildren: () => import('./lib-reference/lib-reference.module').then(m => m.LibReferenceModule) },
    // { path: 'lib-upload', loadChildren: () => import('./lib-upload/lib-upload.module').then(m => m.LibUploadModule) },
    { path: 'life-time-limit', loadChildren: () => import('./life-time-limit/life-time-limit.module').then(m => m.LifeTimeLimitModule) },
    { path: 'location-flight', loadChildren: () => import('./location-flight/location-flight.module').then(m => m.LocationFlightModule) },
    { path: 'mel', loadChildren: () => import('./mel/mel.module').then(m => m.MelModule) },
   
    { path: 'partid', loadChildren: () => import('./partid/partid.module').then(m => m.PartidModule) },
    { path: 'pilot', loadChildren: () => import('./pilot/pilot.module').then(m => m.PilotModule) },
    { path: 'position', loadChildren: () => import('./position/position.module').then(m => m.PositionModule) },
    { path: 'shipping', loadChildren: () => import('./shipping/shipping.module').then(m => m.ShippingModule) },
    { path: 'type-ofwork', loadChildren: () => import('./type-ofwork/type-ofwork.module').then(m => m.TypeOfworkModule) },
    { path: 'warranty', loadChildren: () => import('./warranty/warranty.module').then(m => m.WarrantyModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmimsMasterRoutingModule { }
