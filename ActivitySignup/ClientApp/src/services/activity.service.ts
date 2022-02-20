
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Signup } from '../model/signup.model';
import { Observable } from 'rxjs';

@Injectable()
export class ActivityService {
    headers: Headers;

    constructor(
        private httpClient: HttpClient,
    ) { }

    getSignups(): Observable<Signup[]> {
        return this.httpClient.get<Signup[]>('api/Signups');
    }

    postSignup(signup: Signup): Promise<any> {
        return this.httpClient.post('api/Signups', signup)
            .toPromise();
    }
}
