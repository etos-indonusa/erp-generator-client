import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'mpart', loadChildren: () => import('./mpart/mpart.module').then(m => m.MpartModule) },
    { path: 'bin', loadChildren: () => import('../amims-inventory/bin/bin.module').then(m => m.BinModule) },
    { path: 'part', loadChildren: () => import('../amims-inventory/part/part.module').then(m => m.PartModule) },
    { path: 'part-actype', loadChildren: () => import('../amims-inventory/part-actype/part-actype.module').then(m => m.PartActypeModule) },
    { path: 'part-alternative', loadChildren: () => import('../amims-inventory/part-alternative/part-alternative.module').then(m => m.PartAlternativeModule) },
    { path: 'part-ata', loadChildren: () => import('../amims-inventory/part-ata/part-ata.module').then(m => m.PartAtaModule) },
    { path: 'part-category', loadChildren: () => import('../amims-inventory/part-category/part-category.module').then(m => m.PartCategoryModule) },
    { path: 'part-condition', loadChildren: () => import('../amims-inventory/part-condition/part-condition.module').then(m => m.PartConditionModule) },
    { path: 'part-figure-index', loadChildren: () => import('../amims-inventory/part-figure-index/part-figure-index.module').then(m => m.PartFigureIndexModule) },
    { path: 'part-install', loadChildren: () => import('../amims-inventory/part-install/part-install.module').then(m => m.PartInstallModule) }, 
    // { path: 'part-log', loadChildren: () => import('../amims-inventory/part-log/part-log.module').then(m => m.PartLogModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AmimsInventoryRoutingModule { }
