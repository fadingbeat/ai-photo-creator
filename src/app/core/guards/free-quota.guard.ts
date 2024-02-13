// free-quota.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../../services/user-service.service';

@Injectable({
    providedIn: 'root',
})
export class FreeQuotaGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(): boolean {
        if (this.userService.hasExceededFreeQuota()) {
            // Redirect to a registration or upgrade page
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
