import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {catchError, map, switchMap, mergeMap} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MetricService } from '../service/metric.service';
import { CommitService } from '../service/commit.service';
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

  constructor(
    public commitService: CommitService,
    public metricService: MetricService) {
  }

  ngOnInit() {
    this.commitService.loadCommits().subscribe(commits => {
      this.commits = commits;
      this.commits.sort((a, b) => b.timestamp - a.timestamp);
    });
    this.appMetrics = Array.from(new Set(AppConfig.METRIC_NAME_MAPPING));
    //this.metricService.loadAvailableMetrics().subscribe(metrics => this.availableMetrics = metrics);
  }
}
