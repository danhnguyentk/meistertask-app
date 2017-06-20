import { User } from '../models/user';

export interface AuthState {
    isAuthenticated: boolean;
    user: User;
}
