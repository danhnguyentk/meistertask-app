import { ErrorMessage } from '../../core/shared/models/error-message.model';
import { User } from '../models/user';

export interface AuthState {
    isAuthenticated: boolean;
    errorMessage: ErrorMessage;
    user: User;
}
