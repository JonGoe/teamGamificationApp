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

@Component({
  selector: 'general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.css']
})
export class GeneralViewComponent implements OnInit {

  commits$: Observable<ICommit[]>;
  availableMetrics$: Observable<IMetric[]>;
  deltaTree$: Observable<INode>;

  constructor(
    public commitService: CommitService,
    public metricService: MetricService) {
  }

  ngOnInit() {
    this.commits$ = this.commitService.loadCommits();
    this.availableMetrics$ = this.metricService.loadAvailableMetrics();
  }
}
