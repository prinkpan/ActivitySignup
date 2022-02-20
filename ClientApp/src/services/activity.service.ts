
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Signup } from '../model/signup.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ActivityService {
    headers: Headers;

    constructor(
        private httpClient: HttpClient,
    ) { }

    getSignups(): Observable<Signup[]> {
        return this.httpClient.get('api/Signups')
            .pipe(map((response: any) => response.json()));
    }

    postSignup(signup: Signup): Observable<Signup[]> {
        return this.httpClient.post('api/Signups', signup)
            .pipe(map((response: any) => response.json()));
    }
}
