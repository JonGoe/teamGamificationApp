import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICommitsGetResponse} from '../interfaces/ICommitsGetResponse';
import {ICommit} from '../interfaces/ICommit';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConfig} from '../AppConfig';
import {environment} from '../../environments/environment';

@Injectable()
export class CommitService {

    constructor(private http: HttpClient) {
    }

    loadCommits(): Observable<ICommit[]> {
      return this.http.get<ICommitsGetResponse>(`${AppConfig.BASE_URL}/projects/1/commits?page=0&size=999`)
        .pipe(map((result: ICommitsGetResponse) => result._embedded.commitResourceList));
    }
}
