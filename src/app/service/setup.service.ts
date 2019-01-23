import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAccessTokenPostResponse} from '../interfaces/IAccessTokenPostResponse';
import {ICommit} from '../interfaces/ICommit';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConfig} from '../AppConfig';
import {environment} from '../../environments/environment';

@Injectable()
export class SetupService {

    constructor(private http: HttpClient) {
    }

    setupServer(): boolean {
      var accessToken: string;
      this.authorizeUser().subscribe(loginResult => {
        accessToken = loginResult;
      });
      return true;
    }

    registerUser(): Observable<any> {
      console.log('registering user...');
      return this.http.post(`${AppConfig.BASE_URL}/user/registration`,
          {
              "username" : AppConfig.USERNAME,
              "password" : AppConfig.PASSWORD
          }
      );
    }

    authorizeUser(): Observable<string> {
      console.log('authorizing user...');
      return this.http.post<IAccessTokenPostResponse>(`${AppConfig.BASE_URL}/user/auth`,
          {
              "username" : AppConfig.USERNAME,
              "password" : AppConfig.PASSWORD
          },
      ).pipe(map((result: IAccessTokenPostResponse) => result.accessToken));
    }
}
