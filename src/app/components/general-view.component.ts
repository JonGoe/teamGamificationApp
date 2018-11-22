import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap, mergeMap} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MetricService } from '../service/metric.service';
import { CommitService } from '../service/commit.service';
import { SetupService } from '../service/setup.service';
import { IMetricMapping } from '../interfaces/IMetricMapping';
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

  serverSetUp: boolean;

  constructor(
    public commitService: CommitService,
    public metricService: MetricService,
    public setupService: SetupService) {
  }

  ngOnInit() {
    this.serverSetUp = true;
    //this.serverSetUp = this.setupService.setupServer();
    if(this.serverSetUp) {
      this.commitService.loadCommits().subscribe(commits => {
        commits
          .filter(ICommit => ICommit.timestamp  > (Date.now()-15778458000))
          .filter(ICommit => ICommit.analyzed == true)
          .sort((a, b) => b.timestamp - a.timestamp);
        this.commits = commits;
      });
      this.appMetrics = Array.from(new Set(AppConfig.METRIC_NAME_MAPPING));
      //this.metricService.loadAvailableMetrics().subscribe(metrics => this.availableMetrics = metrics);
    }
  }
}
