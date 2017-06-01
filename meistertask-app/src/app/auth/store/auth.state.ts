import { ErrorMessage } from '../../shared/models/error-message.model';

export interface AuthState {
    isAuthenticated: boolean;
    errorMessage: ErrorMessage;
}
