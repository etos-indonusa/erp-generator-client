import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'user-group',
        loadChildren: () => import('./user-group/user-group.module').then(m => m.UserGroupModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AclRoutingModule { }
