import { Injectable } from '@angular/core';

import { User } from '../auth/models/user';

@Injectable()
export class LocalStorageService {
    private CURRENT_USER_KEY: string = 'user';

    constructor() { }

    setItem(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    getItem<T>(key: string): T {
        return JSON.parse(localStorage.getItem(key));
    }

    removeItem(key: string) {
        localStorage.removeItem(key);
    }

    setCurrentUser(value: any) {
        this.setItem(this.CURRENT_USER_KEY, value);
    }

    getCurrentUser(): User {
        return this.getItem<User>(this.CURRENT_USER_KEY);
    }

    removeCurrentUser() {
        return this.removeItem(this.CURRENT_USER_KEY);
    }
}
