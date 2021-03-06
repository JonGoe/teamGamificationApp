import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap, mergeMap} from 'rxjs/operators';
import { MetricService } from '../service/metric.service';
import { CommitService } from '../service/commit.service';
import { SetupService } from '../service/setup.service';
import { IMetric } from '../interfaces/IMetric';
import { ICommit } from '../interfaces/ICommit';
import { INode } from '../interfaces/INode';
import { AppConfig } from '../AppConfig';

@Component({
  selector: 'general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.css']
})
export class GeneralViewComponent implements OnInit {

  commits: ICommit[];
  availableMetrics: IMetric[];
  appMetrics: IMetric[];
  expAccessToken: Observable<string>;
  tempAccessToken: string;

  serverSetUp: boolean;

  constructor(
    public commitService: CommitService,
    public metricService: MetricService,
    public setupService: SetupService) {
  }

  ngOnInit() {
    this.setupService.authorizeUser().subscribe(loginResultAccessToken => {
      this.commitService.loadCommits(loginResultAccessToken).subscribe(commits => {
        commits.filter(ICommit => ICommit.analyzed == true);
        commits.filter(ICommit => new Date(ICommit.timestamp).toLocaleDateString()  > new Date((Date.now()-2629743000)).toLocaleDateString());
        this.commits = commits.sort((a, b) => b.timestamp - a.timestamp);
      });
      this.appMetrics = Array.from(new Set(AppConfig.METRICS));
      //this.metricService.loadAvailableMetrics().subscribe(metrics => this.availableMetrics = metrics);
    });
  }
}
