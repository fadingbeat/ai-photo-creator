// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public maxFreeInteractions = 2;
    public userInteractions = 0;

    makeInteraction(): boolean {
        if (this.userInteractions < this.maxFreeInteractions) {
            this.userInteractions++;
            return true;
        } else {
            return false;
        }
    }

    getUserInteractions(): number {
        return this.maxFreeInteractions - this.userInteractions - 1;
    }

    hasExceededFreeQuota(): boolean {
        return this.userInteractions >= this.maxFreeInteractions;
    }
}
