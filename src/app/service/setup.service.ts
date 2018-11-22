import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICommitsGetResponse} from '../interfaces/ICommitsGetResponse';
import {ICommit} from '../interfaces/ICommit';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppConfig} from '../AppConfig';
import {environment} from '../../environments/environment';

@Injectable()
export class SetupService {
    accessToken: any;

    constructor(private http: HttpClient) {
    }

    setupServer(): boolean {
      this.registerUser();
      return true;
    }

    registerUser() {
      console.log('registering user...');
      console.log("Dies ist das ursprüngliche Access-Token");
      console.log(this.accessToken);
      return this.http.post('http://localhost:8080/user/registration',
          {
              "username" : AppConfig.USERNAME,
              "password" : AppConfig.PASSWORD
          }
      ).pipe(map(result => {
                this.accessToken = result.accessToken;
                this.authorizeUser();
                this.createProject();
                this.addFilePattern();
                this.addAnalyzerConfig();
                this.addAnalyzingStrategy();
              }));
    }
    authorizeUser(access) {
      console.log('authorizing user...');
      return this.http.post('http://localhost:8080/user/auth',
          {
              "username" : AppConfig.USERNAME,
              "password" : AppConfig.PASSWORD
          },
          {
              headers: {'Authorization': accessToken}
          }
      );
    }

    createProject() {
      console.log('creating project...');
      return this.http.post('http://localhost:8080/projects',
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

    addFilePattern() {
      console.log('adding file pattern...');
      return this.http.post('http://localhost:8080/projects/1/files',
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

    addAnalyzerConfig() {
      console.log('adding analyzing configs...');

      var enabledAnalyzerPlugins = [
          'org.wickedsource.coderadar.analyzer.loc.LocAnalyzerPlugin',
          'org.wickedsource.coderadar.analyzer.checkstyle.CheckstyleSourceCodeFileAnalyzerPlugin'
      ];

      var promises = [];
      for (var pluginName of enabledAnalyzerPlugins) {
          promises.push(
              this.http.post('http://localhost:8080/projects/1/analyzers',
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

      return this.http.all(promises);
    }

    addAnalyzingStrategy() {
        console.log('adding analyzing strategy...');
        var fromDate = new Date(fromYear, fromMonth - 1, fromDay);

        return this.http.post('http://localhost:8080/projects/1/analyzingJob',
            {
                "fromDate" : fromDate.getTime(),
                "active" : true,
                "rescan" : true
            },
            {
                headers: {'Authorization': accessToken}
            }
        );
    }
}
