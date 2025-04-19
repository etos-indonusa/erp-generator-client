import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, take, filter } from 'rxjs/operators'; 
import { PesanService } from 'src/app/shared/services/pesan.service';
import { environment } from 'src/environments/environment';
import { getCurrentUser } from '../store/auth.selectors';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private store: Store<any>,
        private pesanService: PesanService,
        private router: Router
    ) { 

       
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        
        if (environment.authenticated) return of(true); // bypass in dev/demo
        if (environment.maintenance) {
            alert('This Site Is Still Under Maintenance');
            this.router.navigate(['/auth/maintenance']);
            return of(false);
        }

        return this.store.select(getCurrentUser).pipe(
            filter(user => user !== undefined), // tunggu sampai user tersedia (null / object)
            take(1),
            map(user => {
                if (user == null) {
                    // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
                    localStorage.setItem('redirectAfterLogin', state.url);
                    this.router.navigate(['/auth/login']);
                    return false;
                }

                const routeData = route.data;
                // if (routeData?.name_module && user?.data?.role) {
                //     const role = user.data.role.find(
                //         (r: any) => r.name_module === routeData.name_module && r.module_detail === routeData.action
                //     );
                //     if (!role || role.access !== 'true') {
                //         this.pesanService.pesanWarningForm(
                //             `Anda tidak memiliki akses #${routeData.name_module}@${routeData.action}`
                //         );
                //         this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
                //         return false;
                //     }
                // }

                return true;
            })
        );
    }
}
