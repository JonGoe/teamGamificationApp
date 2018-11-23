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
        console.log(accessToken);
        this.createProject(accessToken);
        this.addFilePattern(accessToken);
        this.addAnalyzerConfig(accessToken);
        this.addAnalyzingStrategy(accessToken);
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
          }
      ).pipe(map((result: IAccessTokenPostResponse) => result.accessToken));
    }

    createProject(accessToken: string) {
      console.log('creating project...');
      return this.http.post(`${AppConfig.BASE_URL}/projects`,
          {
            "name" : "budgeteer",
            "vcsUrl" : "https://github.com/adessoAG/budgeteer.git",
            "startDate" : [ 2018, 10, 1 ],
            "endDate" : [ ],
          },
          {
              headers: {'Authorization': accessToken}
          }
      );
    }

    addFilePattern(accessToken: string) {
      console.log('adding file pattern...');
      return this.http.post(`${AppConfig.BASE_URL}/projects/8/files`,
          {
              "filePatterns": [{
                  "pattern": "**/*.java",
                  "inclusionType": "INCLUDE",
                  "fileSetType": "SOURCE"
              }]
          },
          {
              headers: {'Authorization': accessToken}
          }
      );
    }

    addAnalyzerConfig(accessToken: string) {
      console.log('adding analyzing configs...');

      var enabledAnalyzerPlugins = [
          'org.wickedsource.coderadar.analyzer.loc.LocAnalyzerPlugin',
          'org.wickedsource.coderadar.analyzer.checkstyle.CheckstyleSourceCodeFileAnalyzerPlugin'
      ];

      var promises = [];
      for (var pluginName of enabledAnalyzerPlugins) {
          promises.push(
              this.http.post(`${AppConfig.BASE_URL}/projects/8/analyzers`,
                  {
                      "analyzerName": pluginName,
                      "enabled": true
                  },
                  {
                      headers: {'Authorization': accessToken}
                  }
              )
          );
      }
    }

    addAnalyzingStrategy(accessToken: string) {
        console.log('adding analyzing strategy...');

        return this.http.post(`${AppConfig.BASE_URL}/projects/8/analyzingJob`,
            {
                "fromDate" : "1538352000000",
                "active" : true,
                "rescan" : true
            },
            {
                headers: {'Authorization': accessToken}
            }
        );
    }
}
