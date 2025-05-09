import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'site', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },
    { path: 'mpart', loadChildren: () => import('./mpart/mpart.module').then(m => m.MpartModule) },
    // { path: 'bin', loadChildren: () => import('../amims-inventory/bin/bin.module').then(m => m.BinModule) },
    { path: 'part', loadChildren: () => import('./part/part.module').then(m => m.PartModule) },
    // { path: 'part-actype', loadChildren: () => import('../amims-inventory/part-actype/part-actype.module').then(m => m.PartActypeModule) }, 
    // { path: 'part-ata', loadChildren: () => import('../amims-inventory/part-ata/part-ata.module').then(m => m.PartAtaModule) },
    // { path: 'part-category', loadChildren: () => import('../amims-inventory/part-category/part-category.module').then(m => m.PartCategoryModule) },
    // { path: 'part-condition', loadChildren: () => import('../amims-inventory/part-condition/part-condition.module').then(m => m.PartConditionModule) }, 
    // { path: 'part-log', loadChildren: () => import('../amims-inventory/part-log/part-log.module').then(m => m.PartLogModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AmimsInventoryRoutingModule { }
