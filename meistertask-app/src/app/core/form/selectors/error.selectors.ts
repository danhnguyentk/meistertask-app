import { AppState } from '../../../interface';

export function getErrorLogin(appState: AppState) {
    return appState.error.login;
}

export function getErrorSignup(appState: AppState) {
    return appState.error.signup;
}
