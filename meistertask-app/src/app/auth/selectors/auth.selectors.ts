import { AppState } from '../../interface';
import { AuthState } from '../models/auth.state';
import { ErrorMessage } from '../../shared/models/error-message.model';
import { User } from '../models/user';

export function getAuth(state: AppState): AuthState {
    return state.auth;
}

export function getAuthStatus(state: AppState): boolean {
    return state.auth.isAuthenticated;
}

export function getAuthErrorMessage(state: AppState): ErrorMessage {
    return state.auth.errorMessage;
}

export function getAuthUser(state: AppState): User {
    return state.auth.user;
}
