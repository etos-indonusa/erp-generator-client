import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'amims-master', pathMatch: 'full' },

    // amims-master
    // { path: 'amims-master', loadChildren: () => import('./amims-master/amims-master.module').then(m => m.AmimsMasterModule) },

    // amims-erp
    // { path: 'amims-erp', loadChildren: () => import('./amims-erp/amims-erp.module').then(m => m.AmimsErpModule) },

    // // amims-maintenance
    { path: 'amims-maintenance', loadChildren: () => import('./amims-maintenance/amims-maintenance.module').then(m => m.AmimsMaintenanceModule) },

    // amims-maintenance
    // { path: 'amims-inventory', loadChildren: () => import('./amims-inventory/amims-inventory.module').then(m => m.AmimsInventoryModule) },,,,,,,,,
  
            
  
      
   
  
            
  
            
   
  
          
   
   






];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AmimsRoutingModule { }
