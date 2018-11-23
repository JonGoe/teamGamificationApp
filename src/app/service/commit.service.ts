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
      return this.http.get<ICommitsGetResponse>(`${AppConfig.BASE_URL}/projects/8/commits?page=0&size=999`,{
            headers: {'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjb2RlcmFkYXIiLCJleHAiOjE1NDI5OTQ4ODksInR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE1NDI5OTM5ODksInVzZXJJZCI6IjMiLCJ1c2VybmFtZSI6InJhZGFyIn0.QUfDl7GRWvWlvUP2J32nuR4cJ_jH95rJz4CfoCO2ScQ"}
        })
        .pipe(map((result: ICommitsGetResponse) => result._embedded.commitResourceList));
    }
}
