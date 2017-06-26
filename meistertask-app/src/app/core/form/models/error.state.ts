import { ErrorMessage } from '../models/error-message.model';

export interface ErrorState {
    login: ErrorMessage;
    signup: ErrorMessage;
    changePassword: ErrorMessage;
    changePasswordSuccess: string;
}
