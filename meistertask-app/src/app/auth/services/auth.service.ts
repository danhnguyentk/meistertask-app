import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { HttpWrapperService } from '../../core/http-wrapper.service';

@Injectable()
export class AuthService {

    constructor(private httpWrapperService: HttpWrapperService) { }

    signup(user: User) {
        this.httpWrapperService.post('/signup', user)
    }

}
