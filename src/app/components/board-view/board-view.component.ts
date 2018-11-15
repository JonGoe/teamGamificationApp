import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Observable} from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { MetricService } from '../../service/metric.service';
import { IFilter } from '../../interfaces/IFilter';
import { INode } from '../../interfaces/INode';
import { IMetricMapping } from '../../interfaces/IMetricMapping';
import { ICommit } from '../../interfaces/ICommit';
import { IMetric } from '../../interfaces/IMetric';
import { ICommitElement } from '../../interfaces/ICommitElement';
import { ITableRow } from '../../interfaces/ITableRow';
import { IUserLeaderboardElement } from '../../interfaces/IUserLeaderboardElement';
import { ICommitLeaderboardElement } from '../../interfaces/ICommitLeaderboardElement';
import { AppConfig } from '../../AppConfig';

@Component({
    selector: 'board-view',
    templateUrl: './board-view.component.html',
    styles: []
})
export class BoardViewComponent implements OnInit, OnChanges {

    @Input() commits: ICommit[];
    @Input() availableMetrics: IMetric[];

    ICommitElements: ICommitElement[];
    IUserLeaderboardElements: IUserLeaderboardElement[];

    metricNames: string[];
    authors: string[];

    node: Observable<INode>;
    testDelta: INode;

    constructor(public metricService: MetricService) {}

    ngOnInit() {
      this.ICommitElements = [];
      this.IUserLeaderboardElements = [];
    }

    ngOnChanges() {
      if (this.availableMetrics && this.commits) {

        console.log(this.availableMetrics);
        this.metricNames = this.availableMetrics.map(metric => metric.metricName);
        console.log(this.metricNames);
        this.authors = Array.from(new Set(this.commits.map(commit => commit.author)));
        console.log(this.authors);

        let totalUserPoints = 0;

        for (var i = 0; i < this.commits.length-1; i++) {
          let deltaTree: INode;
          let tableRows: ITableRow[] = [];
          let totalCommitPoints = 0;

          let currentCommit = this.commits[i];
          //console.log(currentCommit);

          let previousCommit = this.commits[i+1];
          //console.log(previousCommit);

          let commitDate = new Date(currentCommit.timestamp).toLocaleDateString();

          //console.log("------------------------------");
          this.metricService.loadDeltaTree(previousCommit, currentCommit, this.metricNames)
            .subscribe(node => {
              deltaTree = node;
              tableRows = this.prepareTableData(deltaTree);
              for(var j = 0; j < tableRows.length; j++) {
                totalCommitPoints += tableRows[j].points;
              }

              this.ICommitElements.push({
                currentCommit: currentCommit,
                previousCommit: previousCommit,
                date: commitDate,
                totalPoints: totalCommitPoints,
                tableRows: tableRows
              });
            });
        }
        if(this.ICommitElements) {
          for(var k = 0; k < this.authors.length; k++) {
            let authorName = this.authors[k];
            let userScore = 0;
            for(var l = 0; l < this.ICommitElements.length; l++) {
              if(this.ICommitElements[i].currentCommit.author == authorName) {
                userScore += this.ICommitElements[i].totalPoints;
              }
            console.log("===============================");
            console.log(authorName);
            console.log(userScore);
            }
          }
        }
      }
    }

    prepareTableData(foundElement: INode): ITableRow[] {
      let rows: ITableRow[] = [];
      for (const key of Object.keys(this.availableMetrics)) {
          const metricName = this.availableMetrics[key].metricName;
          let currentCommitValue;
          if (foundElement.commit1Metrics && foundElement.commit1Metrics[metricName]) {
              currentCommitValue = foundElement.commit1Metrics[metricName];
              console.log("Current Value: " + currentCommitValue);
          }

          let previousCommitValue;
          if (foundElement.commit2Metrics && foundElement.commit2Metrics[metricName]) {
              previousCommitValue = foundElement.commit2Metrics[metricName];
              console.log("Previous Value: " + previousCommitValue);
          }

          let difference = 0;
          if (currentCommitValue && previousCommitValue) {
              difference = previousCommitValue - currentCommitValue;
              console.log("Difference: " + difference);
          }

          let points = 0;
          if(difference > 0) {
              points = 5;
              console.log("Points: " + points);
          }
          if(difference!=0) {
            rows.push({
                metricName: AppConfig.getShortNameByMetricName(metricName).shortName,
                currentCommitValue: currentCommitValue || 'N/A',
                previousCommitValue: previousCommitValue || 'N/A',
                difference: difference,
                points: points
            });
          }
      }
      return rows;
    }
}
