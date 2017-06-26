import { AppState } from '../../../interface';

export function getErrorLogin(appState: AppState) {
    return appState.error.login;
}

export function getErrorSignup(appState: AppState) {
    return appState.error.signup;
}

export function getErrorChangePassword(appState: AppState) {
    return appState.error.changePassword;
}

export function getMessageChangePasswordSuccess(appState: AppState) {
    return appState.error.changePasswordSuccess;
}
