import { AppState } from '../../interface';
import { AuthState } from '../models/auth.state';
import { User } from '../models/user';

export function getAuth(state: AppState): AuthState {
    return state.auth;
}

export function getAuthStatus(state: AppState): boolean {
    return state.auth.isAuthenticated;
}

export function getAuthUser(state: AppState): User {
    return state.auth.user;
}
